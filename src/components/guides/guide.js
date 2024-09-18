import React, { useState } from 'react';
import './guide.css'; // CSS file
import image1 from '../assets/team2.jpg'
import video1 from '../assets/batura.mp4';
import video2 from '../assets/batura1.mp4';

const GuideContainer = () => {
  const guides = [
    {
      id: 1,
      name: 'Royal Karoo Safaris',
      location: 'Eastern Cape, South Africa',
      rating: 9.7,
      reviews: 5,
      description: 'Our privately owned hunting area is 25 000 Acres in one block with a Boutique Lodge on site...',
      videoSrc: video1,
    },
    {
      id: 2,
      name: 'Spear Safari cc',
      location: 'Limpopo, South Africa',
      rating: 9.8,
      reviews: 6,
      description: 'Small personalized hunting and touring company, owned by Marita and Ernest Dyason...',
      videoSrc: video2,
    },
    {
      id: 3,
      name: 'Buffalo Legends',
      location: 'Limpopo, South Africa',
      rating: 9.8,
      reviews: 7,
      description: 'We guarantee an unforgettable hunting safari on 17 000 acres of pure African bush...',
      videoSrc: video1,
    },
    {
      id: 4,
      name: 'Zingela Safaris',
      location: 'KwaZulu-Natal, South Africa',
      rating: 9.6,
      reviews: 10,
      description: 'Hunt wild African game on over 12,000 acres...',
      videoSrc: video2,
    },
    {
      id: 5,
      name: 'Kalahari Safaris',
      location: 'Northern Cape, South Africa',
      rating: 9.9,
      reviews: 8,
      description: 'Enjoy Kalahari desert game hunting on an expansive private ranch...',
      videoSrc: video1,
    },
  ];

  const [currentGuideIndex, setCurrentGuideIndex] = useState(0);

  const nextGuides = () => {
    setCurrentGuideIndex((prevIndex) => 
      prevIndex + 3 >= guides.length ? 0 : prevIndex + 3
    );
  };

  const previousGuides = () => {
    setCurrentGuideIndex((prevIndex) => 
      prevIndex === 0 ? guides.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="guide-container">
      <h2 className="title">Meet your guides <span className="arrow">»</span></h2>
      <div className="guides-grid">
        {guides.slice(currentGuideIndex, currentGuideIndex + 3).map(guide => (
          <div className="guide-card" key={guide.id}>
            <div className="guide-video">
              <video width={'100%'} controls>
                <source src={guide.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="guide-info">
              <div className='guide-info_container'>
             <div>
             <h3 className='guide_info_heading'>{guide.name}</h3>
             <p className='guide_info_para'>{guide.location}</p>
             <div className="rating">
                {'★'.repeat(5)} {guide.rating} • {guide.reviews} reviews
              </div>
              </div>
              <img className='rating_guide_image' src={image1} />
             
                </div>
              <p className="description">{guide.description}</p>
              <button className="view-page-btn">View the outfitter page</button>
            </div>
          </div>
        ))}
      </div>

      {/* Move the arrows outside of guides-grid */}
      <button className="left-arrow" onClick={previousGuides}>‹</button>
      <button className="right-arrow" onClick={nextGuides}>›</button>
    </div>
  );
};

export default GuideContainer;
