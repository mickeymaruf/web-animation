import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const projects = [
  {
    id: "1",
    name: "Pixel Hub",
    color: "#FF5733", // vibrant red-orange
    image:
      "https://business.adobe.com/blog/basics/media_14e35529cffcb7d5fe9d68dc1fbcf3662196be3f3.png?width=750&format=png&optimize=medium",
  },
  {
    id: "2",
    name: "Sky Forge",
    color: "#FF9800", // vibrant orange
    image:
      "https://muffingroup.com/blog/wp-content/uploads/2020/07/Arrive-Hydrated.jpg",
  },
  {
    id: "3",
    name: "Quantum Leap",
    color: "#4CAF50", // vibrant green
    image:
      "https://www.sliderrevolution.com/wp-content/uploads/2020/08/The-Digital-Panda.jpg",
  },
  {
    id: "4",
    name: "Nebula Forge",
    color: "#9C27B0", // vibrant purple
    image:
      "https://assets.awwwards.com/awards/element/2023/05/64664f4f4d888325090780.jpg",
  },
];

function AwwwardsProjectGallery() {
  const [modal, setModal] = useState({ active: false, index: null });
  const projectsContainer = useRef(null);

  return (
    <section className="flex items-center min-h-screen">
      <div ref={projectsContainer} className="w-full px-40 relative">
        {projects.map((p, index) => (
          <div
            key={p.id}
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index: null })}
            className="py-10 px-16 first:border-t border-b border-gray-300 w-full flex items-center justify-between group cursor-pointer"
          >
            <h1 className="text-5xl font-medium group-hover:translate-x-[10px] group-hover:opacity-40 duration-200">
              {p.name}
            </h1>
            <p className="group-hover:-translate-x-[10px] group-hover:opacity-40 duration-200">
              Design & Development
            </p>
          </div>
        ))}

        {/* modal */}
        <Modal
          projects={projects}
          modal={modal}
          projectsContainer={projectsContainer}
        />
      </div>
    </section>
  );
}

export default AwwwardsProjectGallery;
