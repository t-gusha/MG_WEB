import React, { useEffect, useMemo, useState } from "react";
import { TEST_DATA } from "../test_data/CoursesTestData";
import DetailedView from "./DetailedView";

function buildSlides(totalItems, itemsPerSlide, minOnLast) {
  const slides = [];
  let i = 0;
  while (i < totalItems) {
    const remaining = totalItems - i;
    let take = Math.min(itemsPerSlide, remaining);
    if (remaining === 1 && slides.length > 0) {
      const prev = slides[slides.length - 1];
      if (prev.length > minOnLast) {
        const movedIndex = prev.pop();
        slides.push([movedIndex]);
        i = totalItems;
        break;
      } else {
        take = minOnLast;
      }
    }
    const slide = [];
    for (let k = 0; k < take; k++) {
      slide.push(i + k);
    }
    slides.push(slide);
    i += take;
  }
  if (
    slides.length &&
    totalItems >= minOnLast &&
    slides[slides.length - 1].length < minOnLast
  ) {
    const last = slides[slides.length - 1];
    const deficit = minOnLast - last.length;
    const prev = slides[slides.length - 2];
    if (prev && prev.length - deficit >= 1) {
      for (let d = 0; d < deficit; d++) {
        last.unshift(prev.pop());
      }
    }
  }
  return slides;
}

export default function Catalogue() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [current, setCurrent] = useState(0);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [detailIdx, setDetailIdx] = useState(null);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setItemsPerSlide(w >= 1024 ? 3 : 2);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const items = useMemo(() => {
    const count =
      Array.isArray(TEST_DATA) && TEST_DATA.length > 0 ? TEST_DATA.length : 9;
    return Array.from({ length: count }, (_, idx) => idx);
  }, []);

  const slides = useMemo(
    () => buildSlides(items.length, itemsPerSlide, 2),
    [items.length, itemsPerSlide]
  );

  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, slides.length - 1)));
  }, [slides.length]);

  const onPrev = () => setCurrent((c) => Math.max(0, c - 1));
  const onNext = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const atFirst = current === 0;
  const atLast = current === slides.length - 1;

  return (
    <div className="w-full px-5 h-auto flex flex-col lg:flex-row">
      <div className="h-auto basis-2/6 pt-10 p-6 overflow-y-auto flex flex-col justify-center items-start">
        <h3 className="text-4xl font-bold mb-3 text-gray-900">
          Courses and Titles
        </h3>
        <p className="mb-6 text-gray-700 leading-relaxed">
          These courses are helpful and very nice. Browse through the catalog
          using the buttons below the carousel.
        </p>
      </div>

      <div className="h-auto basis-4/6 p-6 overflow-y-auto">
        <div className="w-full flex flex-col items-center">
          {/* Viewport */}
          <div className="relative w-full overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-1000 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slideArr, sIdx) => (
                <div
                  key={sIdx}
                  className={`w-full shrink-0 flex items-center gap-4 px-2 py-2 ${
                    slideArr.length < 3 ? "justify-start" : "justify-center"
                  }`}
                >
                  {slideArr.map((idx) => (
                    <div
                      key={idx}
                      className="w-[300px] h-[400px] bg-gray-300 rounded-2xl shadow-md flex items-end justify-center bg-cover bg-center cursor-pointer"
                      aria-label={`Item ${idx + 1}`}
                      style={{ backgroundImage: `url(${TEST_DATA[idx].img1})` }}
                      // NEW: open detail view on click
                      onClick={() => {
                        setDetailIdx(idx);
                        setIsDetailOpen(true);
                      }}
                    >
                      <div className=" bg-[#F3F5E6] w-full h-[120px] m-5 rounded-xl px-4 py-2 hover:shadow-xl duration-300 ease-in">
                        <h1 className="text-md text-gray-600 font-bold">
                          {TEST_DATA[idx].title}
                        </h1>
                        <h2 className="text-sm text-gray-700">
                          {TEST_DATA[idx].subtitle}
                        </h2>
                        <div className="w-full flex items-end justify-end">
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={onPrev}
              disabled={atFirst}
              className={`px-2 py-1 rounded-full border text-sm font-medium shadow-sm cursor-pointer transition disabled:opacity-40 disabled:cursor-not-allowed ${
                atFirst
                  ? "bg-gray-100 border-gray-200 text-gray-400"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
              aria-disabled={atFirst}
              aria-label="Previous slide"
            >
              ←
            </button>

            <span className="flex gap-2 items-center">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`transition-all duration-300 ease-out ${
                    i === current
                      ? "h-2 w-7 rounded-full bg-brand-blue"
                      : "h-2 w-2 rounded-full bg-brand-blue/50"
                  }`}
                />
              ))}
            </span>

            <button
              onClick={onNext}
              disabled={atLast}
              className={`px-2 py-1 rounded-full border text-sm font-medium shadow-sm cursor-pointer transition disabled:opacity-40 disabled:cursor-not-allowed ${
                atLast
                  ? "bg-gray-100 border-gray-200 text-gray-400"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
              aria-disabled={atLast}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {isDetailOpen && (
        <DetailedView
          index={detailIdx}
          onClose={() => setIsDetailOpen(false)}
        />
      )}
    </div>
  );
}
