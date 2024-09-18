import React from 'react';
import './aboutus.css'; // CSS file for styling
import aboutImage from '../assets/passu.jpg'; // Ensure you import the image correctly
import FooterComponent from '../Footer/footer';

const AboutUs = () => {
  return (
    <>
    <div className="about-us-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; About us
      </div>
      
      {/* Title Section */}
      <h1 className="about-title">ABOUT US - PASSU BATURA IBEX- VALERIANO BELLES</h1>
      
      {/* Main Image */}
      <div className="about-image-container">
        <img src={aboutImage} alt="Valeriano in front of the tent" className="about-image" />
      </div>
      
      {/* Content Section */}
      <div className="about-content">
        <p>
          <a href="https://www.ibexhuntspain.com" target="_blank" rel="noreferrer">Valeriano</a>, 
          owner of <a href="https://www.ibexhuntspain.com" target="_blank" rel="noreferrer">IbexHuntSpain</a>,and GrandSlamIbex, is first and foremost a hunter and has been for many years and so knows exactly what a hunter is looking for and he is also an experienced outfitter. <br /> <br />

When he organizes a hunting trip for you, he knows and feels all the expectations and joy which you expect to get from one of these exceptional hunting trips of a lifetime.
<br /> <br />
Some people who know Valeriano, will say that he takes the hunting too seriously, but it is because of his love of the game, that this is his pleasure in life and because of this, he cares very much about the success of the hunts for his clients and friends.
<br /> <br />
This attitude always shows through when you meet or talk with him and all of his partners follow this passion too, making sure that the clients, no matter whether the hunt is in Europe or Eurasia, will have the fantastic hunting trip of their lives, get what they are looking for, trophies, good accommodation, excellent guides and perhaps lifelong friendships.
        </p>
      </div>
    </div>
    <FooterComponent />
    </>
  );
};

export default AboutUs;
