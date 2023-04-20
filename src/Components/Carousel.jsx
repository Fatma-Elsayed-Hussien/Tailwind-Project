import { useEffect, useState } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const intervalRef = setInterval(next, autoSlideInterval);
    return () => clearInterval(intervalRef);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500 min-h-[450px] lg:h-full md:h-full sm:min-h-[450px]"
        // style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides[curr]}
      </div>

      <div className="bg-[#1d1f1e7d] absolute top-0 left-0 right-0 bottom-0">
        <div className="container mx-auto px-4 flex justify-center items-center py-10 mb-auto flex-col w-full h-full">
          <div className="flex flex-col justify-center items-center w-[70%] lg:w-[65%] md:w-[85%] sm:w-[70%]">
            <h3 className="text-white text-3xl font-bold text-center mb-6 lg:mb-12 md:mb-6 sm:mb-6 lg:text-7xl md:text-6xl sm:text-5xl xs:text-3xl">
              {curr === 0 && "Make Your Home Like Garden"}
              {curr === 1 && "Create Your Own Small Garden At Home"}
            </h3>
            <button className="bg-[#348E38] text-[#e8f5e9] font-medium px-3 py-2 lg:px-6 lg:py-4 md:px-6 md:py-4 sm:px-3 sm:py-2 rounded text-sm lg:text-base md:text-base sm:text-sm transition duration-500 hover:bg-[#529f56] hover:text-[#000] cursor-pointer z-10">
              Explore More
            </button>
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={prev}
              className="p-1 lg:p-2 md:p-2 sm:p-1 rounded-full shadow bg-[white]/70 text-gray-800 hover:bg-white border-none"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={next}
              className="p-1 lg:p-2 md:p-2 sm:p-1 rounded-full shadow bg-white/70 text-gray-800 hover:bg-white border-none"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
