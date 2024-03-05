import React, { useEffect, useState } from 'react';

const CarouselPage = () => {
  // Sample data for the slider items (replace with your own data)
  const sliderItems = [
    'https://www.professionalbookhouse.com/image/cache/catalog/slideshow/banner2-1920x450.jpg',
    'https://www.professionalbookhouse.com/image/cache/catalog/slideshow/banner3-1920x450.jpg',
    'https://www.professionalbookhouse.com/image/cache/catalog/banner1_professional-1920x450.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(intervalId);
  });

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + sliderItems.length) % sliderItems.length
    );
  };

  return (
    <div>
      <section className="py-12 w-15/12 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <button className={`${currentSlide === 0 ? 'left-4' : 'left-0'} absolute top-1/2 transform -translate-y-1/2 text-4xl text-gray-600 focus:outline-none sm:left-0 sm:text-6xl`} onClick={prevSlide}>
              &lt;
            </button>
            <img
              className="w-full h-auto rounded-lg border border-gray-300 transition-transform duration-500 ease-in-out"
              src={sliderItems[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
            />
            <button className={`${currentSlide === sliderItems.length - 1 ? 'right-4' : 'right-0'} absolute top-1/2 transform -translate-y-1/2 text-4xl text-gray-600 focus:outline-none sm:right-0 sm:text-6xl`} onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselPage;
