import { useState, useEffect } from 'react';
import styles from '../styles/Slider.module.css';
import {Image} from "next/image";
const images = [
  '/images/pants1.jpg',
  '/images/pants2.jpg',
  '/images/pants3.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* Main Slider */}
      <div className={styles.slider}>
        <div className={styles.slideWrapper} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <Image key={index} src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          ))}
        </div>
        <button className={styles.prevButton} onClick={prevSlide}>❮</button>
        <button className={styles.nextButton} onClick={nextSlide}>❯</button>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.progressItem} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Autoplay Toggle */}
      <div className={styles.autoplayToggle}>
        <label>
          <input
            type="checkbox"
            checked={isAutoPlay}
            onChange={() => setIsAutoPlay(!isAutoPlay)}
            style={{
                color: 'black',
                backgroundColor: '#f0bf4c',

            }}
          />
          Autoplay
        </label>
      </div>
    </div>
  );
};

export default Slider;