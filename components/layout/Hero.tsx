import { GlobeAnimation } from "@/components/effects/GlobeAnimation";
import { motion } from "framer-motion";
import React from "react";

//// {/* <motion.div className="drag" drag={true} whileHover={{ scale: 1.2, fill: "white" }} animate={{ opacity: 0.7 }} whileTap={{ scale: 1.618 }} transition={{ duration: 3, delay: 0.1, ease: [0.5, 0.71, 1, 1.5] }} dragConstraints={{ right: 10, left: -10, top: -10, bottom: 0 }} dragTransition={{ bounceStiffness: 61.8, bounceDamping: 80 }} >
//// <div className="h:right-[3.5%] bottom-[22%] origin-bottom-right opacity-60 mix-blend-color-dodge lg:absolute lg:scale-[200%] "> */}
//// {/* </motion.div> */}
export function Hero() {
  return (
    <div className="grid place-content-center bg-on-primary py-6 lg:scale-75">
      <div className="relative mx-auto">
        <h1
          className={`text-9xl font-extrabold leading-[1] tracking-[-0.07em] lg:text-[28rem]`}
        >
          hello
          <span className={`text-accent opacity-100`}>
            .
            <div className="absolute bottom-[21.5%] right-[3.60%] scale-[17%] lg:scale-[54%]">
              <div className="opacity-60 mix-blend-color-dodge blur-[1.1px] brightness-150 backdrop-blur-sm">
                <GlobeAnimation />
              </div>
            </div>
          </span>
        </h1>
      </div>
      <div className="space-y-2 ">
        <h2
          className={`mx-auto text-center text-2xl font-extrabold tracking-tighter text-primary lg:text-[5rem]`}
        >
          <div className="subtitle max-[50vw]:grid place-content-center text-[#f3c77c] md:flex md:space-x-1">
            <span>Design.</span>
            <span>Develop.</span>
            <span>Ship.</span>
          </div>
        </h2>
      </div>
      <h2
        className={`hidden pt-8 text-2xl tracking-tighter text-[#f3c77c] lg:text-center lg:text-4xl `}
      >
        <div className="subtitle max-[427px]:grid place-content-center text-center uppercase md:flex md:space-x-2">
          <span>Design.</span>
          <span>Develop.</span>
          <span>Ship.</span>
        </div>

        <div className="relative w-full space-x-6 lg:max-w-[53vw]">
          <p
            className={`relative text-center text-lg text-secondary lg:max-w-[66vw] `}
          >
            <span className="absolute hidden">
              Empowering innovators to create at the speed of inspiration.
            </span>
            As a software developer, I use open source and AI tools to architect
            efficient code and tackle complex problems with ease.
          </p>
        </div>
      </h2>
    </div>
  );
}
