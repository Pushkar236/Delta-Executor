import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg_vid from "./ring1.mp4";
import vid1 from "./../Loader/component_2.mp4";
import img from "./../Loader/logo.png";

const Loader2 = () => {
  const [showElements, setShowElements] = useState(false);
  const [deviceSize, setDeviceSize] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDeviceSize("sm"); 
      } else if (window.innerWidth < 1024) {
        setDeviceSize("md"); 
      } else {
        setDeviceSize("lg"); 
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowElements(true), 500);
    setTimeout(() => setShowElements(false), 5000);
  }, []);

  const animationSettings = {
    sm: { x: 0, scale: 1, left: "80%", imgWidth: "w-[60vw] max-w-[300px]" },
    md: { x: 0, scale: 2, left: "55%", imgWidth: "w-[50vw] max-w-[300px]" },
    lg: { x: 0, scale: 2, left: "60%", imgWidth: "w-[10vw] max-w-[300px]" },
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      <video className="absolute w-full h-full object-cover" autoPlay muted>
        <source src={bg_vid} type="video/mp4" />
      </video>

      <AnimatePresence>
        {showElements && (
          <motion.div
            className="absolute flex flex-col items-center justify-center w-full h-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: animationSettings[deviceSize].scale,
              x: animationSettings[deviceSize].x,
            }}
            exit={{
              opacity: [1,0.7,0],
              scale: [1.9,1,5],
              transition: { duration: 2, ease: "easeInOut" },
            }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <motion.video
              className="absolute w-[20vw] max-w-[200px] rounded-full shadow-lg"
              autoPlay
              loop
              muted
            >
              <source src={vid1} type="video/mp4" />
            </motion.video>

            <motion.img
              src={img}
              alt="Logo"
              className={`absolute ${animationSettings[deviceSize].imgWidth} h-auto max-h-[50vh] top-1/2 -translate-y-1/2 translate-x-4`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader2;
