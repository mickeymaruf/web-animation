import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0 },
  active: { scale: 1 },
  inactive: { scale: 0 },
};

function Modal({ projects, modal, projectsContainer }) {
  const modalContainer = useRef(null);

  useGSAP(() => {
    if (!projectsContainer.current) return;

    const moveContainerX = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    projectsContainer.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, [projectsContainer.current]);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={modal.active ? "active" : "inactive"}
      className="absolute w-[400px] h-[350px] overflow-hidden"
    >
      {projects.map((p) => (
        <div
          key={p.id}
          className="w-full h-full px-10 flex items-center justify-center duration-300"
          style={{
            backgroundColor: p.color,
            transform: `translateY(${modal.index * -100 + "%"})`,
            transition: "0.4s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          <img className="aspect-video object-cover" src={p.image} />
        </div>
      ))}
    </motion.div>
  );
}

export default Modal;
