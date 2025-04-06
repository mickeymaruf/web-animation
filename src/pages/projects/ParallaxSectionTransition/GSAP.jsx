import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image1 from "./assets/title-img.jpg";
import Image2 from "./assets/mountain.jpg";

// TUTORIA: https://www.youtube.com/watch?v=nZ2LDB7Q7Rk

export default function GSAP() {
  const container = useRef(null);
  const section1 = useRef(null);
  const section2 = useRef(null);

  useGSAP(() => {
    gsap.to(section1.current, {
      scale: 0.9,
      rotate: -5,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.from(section2.current, {
      scale: 0.8,
      rotate: -5,
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={container} className="font bg-black h-[200vh] relative">
      <Section1 ref={section1} />
      <Section2 ref={section2} />
    </div>
  );
}

const Section1 = ({ ...props }) => {
  return (
    <section
      className="sticky top-0 bg-[#C72626] text-white h-screen flex flex-col items-center justify-center text-4xl gap-3"
      {...props}
    >
      <h1>Scroll Perspective</h1>
      <h1 className="flex gap-3">
        Section
        <img className="w-28" src={Image1} alt="" />
        Transition
      </h1>
    </section>
  );
};

const Section2 = ({ ...props }) => {
  return (
    <section className="h-screen relative" {...props}>
      <img className="h-full w-full" src={Image2} alt="" />
    </section>
  );
};
