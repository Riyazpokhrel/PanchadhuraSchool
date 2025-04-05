import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "src/assets/tour.jpg",
    "src/assets/program.jpg",
    "src/assets/mainimage.jpg",
    "src/assets/teachers.jpg",
    "src/assets/foodfestivals.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Increased interval to 6 seconds for smoother experience

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-[2000ms]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[50vw] md:h-[600px] flex-shrink-0"
            />
          ))}
        </div>
        {/* Navigation Controls */}
      </div>
    </div>
  );
};

export default ImageSlider;
