import { useState, useEffect } from 'react';
import './ImageCarousel.css';

const QUOTES = [
  "This is your time",
  "Time pieces created to stand the test of time.",
  "Your time is truly unique.",
  "Confident in the knowledge you wear a matchless and unrivalled timepiece.",
  "Artisan craft as unique as you"
];

const ALL_IMAGES = [
  { url: '/1000044345.jpg' },
  { url: '/1000044347.jpg' },
  { url: '/1000044349.jpg' },
  { url: '/1000044355.jpg' },
  { url: '/1000044357.jpg' },
  { url: '/1000044358.jpg' },
  { url: '/1000044373.jpg' },
  { url: '/1000044375.jpg' },
  { url: '/1000044379.jpg' },
  { url: '/1000044381.jpg' },
  { url: '/1000044385.jpg' },
  { url: '/1000044387.jpg' },
  { url: '/1000044392.jpg' },
].map((image, index) => ({
  ...image,
  caption: QUOTES[index % QUOTES.length]
}));

const imagePairs = [];
for (let i = 0; i < ALL_IMAGES.length; i += 2) {
  if (ALL_IMAGES[i + 1]) {
    imagePairs.push([ALL_IMAGES[i], ALL_IMAGES[i + 1]]);
  } else {
    // If there's an odd one out, pair it with the first image
    imagePairs.push([ALL_IMAGES[i], ALL_IMAGES[0]]);
  }
}

const numPages = imagePairs.length;

function ImageCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % numPages);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % numPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + numPages) % numPages);
  };

  const goToSlide = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
        // This passes the current page number to your CSS
                style={{
                  '--num-pages': numPages,
                  '--current-page': currentPage,
                }}
                        >
          {imagePairs.map((pair, pageIndex) => (
            <div className="carousel-page" key={pageIndex}>
              <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${pair[0].url})` }}
                role="img"
                aria-label={pair[0].caption}
              >
                <div className="carousel-overlay" />
                <div className="carousel-caption">
                  <h2>{pair[0].caption}</h2>
                </div>
              </div>
              <div
                className="carousel-slide"
                style={{ backgroundImage: `url(${pair[1].url})` }}
                role="img"
                aria-label={pair[1].caption}
              >
                <div className="carousel-overlay" />
                <div className="carousel-caption">
                  <h2>{pair[1].caption}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide} aria-label="Previous">
        <span>‹</span>
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide} aria-label="Next">
        <span>›</span>
      </button>
      <div className="carousel-dots">
        {Array.from({ length: numPages }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentPage ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
