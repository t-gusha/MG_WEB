import { useState, useEffect } from "react";

export default function LeftCourse({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of image URLs

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation functions
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-full w-full flex justify-center items-center px-50 py-10">
      <div className="flex flex-col text-text2 justify-start w-[50%] pr-10">
        <h1 className="text-4xl font-bold mb-2">Course 1</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-6">
          Master the Fundamentals
        </h2>

        <p className="mb-4 text-gray-700 leading-relaxed">
          Welcome to our comprehensive course designed to take you from beginner
          to advanced. Through carefully structured lessons and hands-on
          exercises, you'll build a solid foundation in the core concepts while
          developing practical skills that you can immediately apply to
          real-world projects.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our curriculum is continuously updated to reflect the latest industry
          standards and best practices. Join thousands of successful students
          who have transformed their careers through this course. With expert
          instructors, interactive content, and a supportive community, you'll
          have everything you need to succeed.
        </p>
      </div>

      <div className="w-[50%] flex items-center justify-center">
        <div className="relative w-[400px] h-[300px]">
          {/* Main slideshow container */}
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            {/* Images */}
            {images.map((image, index) => (
              <img
                key={index}
                alt={`Slide ${index + 1}`}
                src={image}
                className={`absolute top-0 left-0 w-full h-full bg-gray-600 object-cover transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-gray-800" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
