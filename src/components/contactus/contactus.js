import React from 'react';
import './contactus.css';  // Create this CSS file for styling
import image1 from '../assets/card1.jpg'
import image2 from '../assets/passu.jpg'
import FooterComponent from '../Footer/footer';

const ContactUs = () => {
  return (
    <>
    <div className="breadcrumb_contactus">
        <a href="/">Home</a> &gt; Contact us
      </div>
     
    <div className='contactus_heading'>
    <h2>CONTACT: PASSU BATURA IBEX
        <hr className='contactus_heading_hr' />
    </h2>
 </div>
    <div className="contactus-container">
       
      <div className="contactus_form-container">
        <h4>All fields are required</h4>
        <form className="contactus_contact-form">
          <input type="text" placeholder="Your Name*" required />
          <input type="tel" placeholder="Your Phone*" required />
          <input type="email" placeholder="Email*" required />
          <input type="text" placeholder="Your Country*" required />
          <input type="text" placeholder="Subject*" required />
          <textarea placeholder="Your Message*" required></textarea>
          <div className="contactus_form_privacy-policy">
            <input type="checkbox" required />
            <label>
              I have read and I accept the <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="image-container">
        <img src={image1} alt="Sniper Image" className="contact-image" />
        <img src={image2} alt="GrandSlamIbex Logo" className="contact-image" />
      </div>
    </div>
    <FooterComponent />
    </>
  );
};

export default ContactUs;
