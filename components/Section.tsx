import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type PropsSection = {
  children?: ReactNode;
};
// In this example, the useInView hook returns a ref that you can attach to the motion.section element and a boolean value inView that indicates whether the section is currently in view based on the threshold parameter. The animate prop of the motion.section element uses a ternary operator to set the opacity and y properties based on the inView value, which creates a fade-in and slide-up animation effect when the section enters the viewport. The transition prop sets the duration of the animation.
export const Section = ({ children }: PropsSection) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true, // only trigger once
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`mx-auto px-6`}>{children}</div>
    </motion.div>
  );
};
