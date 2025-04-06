import React, { useRef } from "react";
import Image1 from "./assets/title-img.jpg";
import Image2 from "./assets/mountain.jpg";
import { useScroll, useTransform, motion } from "framer-motion";

// TUTORIA: https://www.youtube.com/watch?v=nZ2LDB7Q7Rk

export default function Framer() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="font bg-black h-[200vh] relative">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </div>
  );
}

const Section1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className="sticky top-0 bg-[#C72626] text-white h-screen flex flex-col items-center justify-center text-4xl gap-3"
    >
      <h1>Scroll Perspective</h1>
      <h1 className="flex gap-3">
        Section
        <img className="w-28" src={Image1} alt="" />
        Transition
      </h1>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  return (
    <motion.section style={{ scale, rotate }} className="h-screen relative">
      <img className="h-full w-full" src={Image2} alt="" />
    </motion.section>
  );
};
