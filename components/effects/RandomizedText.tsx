import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RandomizedText = ({ text }) => {
  const [legibleText, setLegibleText] = useState("");
  const [ref, inView] = useInView({ threshold: 0.3 });

  // Randomize the text by replacing some characters with random ones
  const randomizeText = (text) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{};:,.<>/?";
    let randomizedText = "";
    for (let i = 0; i < text.length; i++) {
      if (Math.random() < 0.2) {
        randomizedText += chars.charAt(
          Math.floor(Math.random() * chars.length)
        );
      } else {
        if (i !== text.length - 1) {
          randomizedText += text.charAt((Math.random() * 10) % text.length);
        } else {
          randomizedText += text.charAt(i);
        }
      }
    }
    return randomizedText;
  };

  // Generate legible text by gradually replacing the random characters
  const generateLegibleText = () => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(interval);
      } else {
        const randomized = randomizeText(text.substring(currentIndex));
        setLegibleText(text.substring(0, currentIndex) + randomized);
        currentIndex++;
      }
    }, 300);
  };

  // Generate legible text when the div is in view
  if (inView && !legibleText) {
    generateLegibleText();
  }

  return (
    <div
      ref={ref}
      // style={{ height: "100vh" }}
    >
      <motion.div
        // animate={{ x: [500, 0], opacity: [0, 1] }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.7 }}
        // style={{ width: "50%", margin: "auto", paddingTop: "100px" }}
      >
        {legibleText}
      </motion.div>
    </div>
  );
};

export default RandomizedText;
