import React, { useState, useEffect } from 'react';
import firstPr from './first-pr.png';
import secondPr from './second-pr.png';
import thirdPr from './third-pr.png';
import fourthPr from './fourth-pr.png';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Immagini placeholder da Unsplash
  const images = [
    firstPr,
    secondPr,
    thirdPr,
    fourthPr,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:flex lg:justify-start  lg:items-center lg:min-h-screen lg:p-4 flex justify-center mx-auto p-auto">
      <div className="relative w-[250px] h-[520px] sm:w-60 sm:h-96 md:w-88 md:h-[800px] lg:w-[420px] lg:h-[880px] bg-transparent">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;