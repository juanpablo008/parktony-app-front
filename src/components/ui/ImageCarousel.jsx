import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ImageModal from './ImageModal';

const ImageCarousel = ({ images, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const handleNextRef = useRef();

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  handleNextRef.current = handleNext;

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextRef.current();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, images.length]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleImageClick = () => {
    setModalImageIndex(currentIndex);
    setIsModalOpen(true);
  };

  const handleModalNavigate = (index) => {
    setModalImageIndex(index);
  };

  return (
    <>
      <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-900 group cursor-pointer" onClick={handleImageClick}>
      {/* Images Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-out ${
              index === currentIndex
                ? 'opacity-100 scale-100 z-10'
                : direction === 'next'
                ? index === (currentIndex - 1 + images.length) % images.length
                  ? 'opacity-0 -translate-x-full scale-95 z-0'
                  : 'opacity-0 translate-x-full scale-95 z-0'
                : index === (currentIndex + 1) % images.length
                ? 'opacity-0 translate-x-full scale-95 z-0'
                : 'opacity-0 -translate-x-full scale-95 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Image Caption */}
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{image.caption}</h3>
                {image.description && (
                  <p className="text-sm text-neutral-200">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'bg-white w-8 h-2'
                : 'bg-white/50 hover:bg-white/70 w-2 h-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-primary-light transition-all duration-100"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`,
          }}
        />
      </div>
    </div>

    {/* Image Modal */}
    <ImageModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      image={images[modalImageIndex]}
      images={images}
      currentIndex={modalImageIndex}
      onNavigate={handleModalNavigate}
    />
    </>
  );
};

export default ImageCarousel;
