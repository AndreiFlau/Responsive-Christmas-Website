import { useState } from "react";
import FavoriteHeart from "./FavoriteHeart";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      const maxIndex = items.length - 3;
      return nextIndex > maxIndex ? 0 : nextIndex;
    });
  }

  function prevSlide() {
    setCurrentIndex((prevIndex) => {
      const prevIdx = prevIndex - 1;
      const maxIndex = items.length - 3;
      return prevIdx < 0 ? maxIndex : prevIdx;
    });
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item) => (
            <div key={item.id} className="carousel-slide">
              <div className="rectangle">{item.content}</div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="carousel-button prev"></button>
        <button onClick={nextSlide} className="carousel-button next"></button>
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
