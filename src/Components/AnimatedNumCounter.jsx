import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function AnimatedNumCounter() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="relative flex transition-transform ease-out duration-500 my-12 w-full h-[36rem] lg:h-[18rem] md:h-[20rem] sm:h-[18rem] xs:h-[36rem]">
          <img
            src="https://themewagon.github.io/gardener/img/carousel-1.jpg"
            className="object-cover w-full h-auto"
          />
          <div className="bg-[#0f422999] absolute top-0 left-0 right-0 bottom-0">
            <div className="container mx-auto px-4 flex justify-center items-center py-10 mb-auto flex-col w-full h-full">
              <div className="grid grid-cols-1 gap-10 xl:gap-70 lg:gap-38 md:gap-20 sm:gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-bold text-5xl text-white mb-4">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={1200}
                        separator=""
                        duration={2}
                        delay={0}
                      />
                    )}{" "}
                  </h4>
                  <span className="text-[#e8f5e9] text-[1.25rem] font-medium">
                    Happy Clients
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-bold text-5xl text-white mb-4">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={1234}
                        separator=""
                        duration={2}
                        delay={0}
                      />
                    )}{" "}
                  </h4>
                  <span className="text-[#e8f5e9] text-[1.25rem] font-semibold">
                    Garden Complated
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-bold text-5xl text-white mb-4">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={1000}
                        separator=""
                        duration={2}
                        delay={0}
                      />
                    )}{" "}
                  </h4>
                  <span className="text-[#e8f5e9] text-[1.25rem] font-semibold">
                    Dedicated Staff
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="font-bold text-5xl text-white mb-4">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={1150}
                        separator=""
                        duration={2}
                        delay={0}
                      />
                    )}{" "}
                  </h4>
                  <span className="text-[#e8f5e9] text-[1.25rem] font-semibold">
                    Awards Achieved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
}
