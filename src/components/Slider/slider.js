import React, { useState, useEffect, useRef } from 'react';
import './slider.css';
import video1 from '../assets/batura.mp4'
import video2 from '../assets/batura1.mp4'
import video3 from '../assets/passu.mp4'
import video4 from '../assets/pasu9.mp4'

const SliderContainer = () => {
  const videos = [
    { url: video1, description: 'The Passu Ibex: resilient, agile, majestic, Karakoram, wild, iconic, powerful.' },
    { url: video1, description: 'The Batura Ibex: resilient, agile, majestic, Karakoram, wild, iconic, powerful.' },
    { url: video2, description: 'The Avdagar Ibex: resilient, agile, majestic, Karakoram, wild, iconic, powerful.' },
    { url: video3, description: 'The Himilayan Ibex: resilient, agile, majestic, Karakoram, wild, iconic, powerful.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);  // Reference to the video element

  // Automatically move to the next video when the current one ends
  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Play the current video when the component mounts or the index changes
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
    }
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slide">
        <video
          ref={videoRef}
          src={videos[currentIndex].url}
          muted
          controls
          autoPlay
          onEnded={handleVideoEnd}
          className="video-player"
        />
        <div className="text-overlay">{videos[currentIndex].description}</div>
      </div>
    </div>
  );
};

export default SliderContainer;
