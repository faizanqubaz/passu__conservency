import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';

import './detail_discount.css';

const DiscountDetail = () => {
    const location = useLocation();
    const { item } = location.state;

    // You can replace 'Alaska' with dynamic location coordinates if necessary.
    const googleMapsUrl = "https://earth.google.com/web/search/Alaska";

    return (
        <div className='discount_detail_main_container'>
            <div className="discount_detail_container">
                <div className='discount_detail_main_container_content'>
                    <div>
                        <h2 className='discount_detail_main_container_heading'>{item.description}</h2>
                        <div className='discount_detail_main_container_content_one'>
                            <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px' }} icon={faLocationArrow} fontSize={'20px'} />
                            {/* Wrap the location in an anchor tag */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='discount_detail_main_container_para'
                            >
                                Alaska
                            </a>
                        </div>
                    </div>

                    <div className="icon-container">
                        <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px', display: 'block', marginBottom: '20px', marginTop: '18px' }} icon={faHeart} fontSize={'20px'} />
                        <FontAwesomeIcon color='#dbb127' style={{ marginLeft: '10px', display: 'block' }} icon={faShareAlt} fontSize={'20px'} />
                    </div>

                    <div className="vertical-line"></div>

                    <div>
                        <p className='discount_detail_main_container_content_two_paragraph'>Package price</p>
                        <div className='discount_detail_main_container_content_two'>
                            <h2 className='discount_detail_main_container_content_two_head'>$5000</h2>
                            <p className='discount_detail_main_container_content_two_para'>ibex closely</p>
                        </div>
                        <p className='discount_detail_main_container_content_two_para_two'>$90000</p>
                    </div>
                </div>
            </div>

            {/* image container */}

            <div className='discount_detail_image_main_container'>
                <div className='discount_detail_image_main_container_one'>
                    <img className='discount_detail_image_main_container_one_iamge' src={item.image} alt='sa' />
                </div>

                <div className='discount_detail_image_main_container_two'>
                    <div className='discount_detail_image_main_container_one_iamge_round_flex'>
                        <img className='discount_detail_image_main_container_one_iamge_round' src={item.image} alt='sa' />
                        <div>
                            <p className='discount_detail_image_main_container_one_iamge_round_para_one'>justin-owner operation(Guide)</p>
                            <p className='discount_detail_image_main_container_one_iamge_round_para_two'>passu gojal</p>
                            <p className='discount_detail_image_main_container_one_iamge_round_para_three'> response rate:67%</p>
                        </div>


                    </div>

                    <div>
                        <h2>More about us</h2>
                        <p>
                            Justin-Owner/Operator
                            United States
                            9.4
                            Response rate: 94%
                            Response time: within a day
                            Contact outfitter
                            More about us
                            Our company was established in 2011 and operates in 3 territories.

                            Located in Southern NM, we have been around since 2011 and our experience shows. Our goal is for you to have a good time with honest hard working people who know the country and will work hard to get you that trophy. We hunt for everything here in NM and have some of the best accommodations in the areas we hunt. Your hunt is an investment and we know that, from lodging to food to your guide we will exceed your expectations. Whether you get your trophy or not you will have a great time with us!</p>
                    </div>

                </div>
            </div>
            {/* dolar */}

            <div className='discount_detail_dolar_main_container'>
                <div className='discount_detail_dolar_main_container_one'>
                    <h2 className='discount_detail_dolar_main_container_one_heading'>About this hunt</h2>
                    <p className='discount_detail_dolar_main_container_one_para'>Unit 34 Cow elk hunt, with 100% success. This is a great youth hunt or hunt to fill that freezer. Good food, accommodations and great guides, what more can you ask for! Weather during these hunts are also mild making it a really comfortable cow elk hunt.<br   /> <br />
                    Hunt price is for 2 hunters with 1 guide. You will be able to harvest a cow each.<br />  <br />
                    Hunt Dates for 2024 -2025 season, Jan 25-27, 2025<br /> <br /> 
                    Guide and field care provided, Pack outs are team effort. <br /> <br />
                    Non hunter add $175.00 a dayHunting season: 25 Jan 2025 - 27 Jan 2025
                    </p>
                    
                </div>

                <div className='discount_detail_image_main_container_two'>
                    <div className='discount_detail_image_main_container_one_iamge_round_flex'>
                        <img className='discount_detail_image_main_container_one_iamge_round' src={item.image} alt='sa' />
                        <div>
                            <p className='discount_detail_image_main_container_one_iamge_round_para_one'>justin-owner operation(Guide)</p>
                            <p className='discount_detail_image_main_container_one_iamge_round_para_two'>passu gojal</p>
                            <p className='discount_detail_image_main_container_one_iamge_round_para_three'> response rate:67%</p>
                        </div>


                    </div>

                    <div>
                        <h2>More about us</h2>
                        <p>
                            Justin-Owner/Operator
                            United States
                            9.4
                            Response rate: 94%
                            Response time: within a day
                            Contact outfitter
                            More about us
                            Our company was established in 2011 and operates in 3 territories.

                            Located in Southern NM, we have been around since 2011 and our experience shows. Our goal is for you to have a good time with honest hard working people who know the country and will work hard to get you that trophy. We hunt for everything here in NM and have some of the best accommodations in the areas we hunt. Your hunt is an investment and we know that, from lodging to food to your guide we will exceed your expectations. Whether you get your trophy or not you will have a great time with us!</p>
                    </div>

                </div>
            </div>




        </div>
    );
};

export default DiscountDetail;
