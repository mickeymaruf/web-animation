import React, { useState } from "react";
import { motion } from "framer-motion";

function NavMenuSlideSwitch() {
  const [pos, setPos] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const setState = (newValue) => {
    setPos((prev) => {
      return { ...prev, ...newValue };
    });
  };

  return (
    <nav className="grid place-items-center h-screen bg-gray-100">
      <ul
        onMouseLeave={() => setState({ opacity: 0 })}
        className="border-2 border-black rounded-full flex items-center w-fit bg-white p-1 relative"
      >
        {["Home", "Pricing", "Features", "Docs", "Blogs"].map((tab, index) => (
          <Tab key={index} tab={tab} setState={setState} />
        ))}

        <motion.li
          style={{
            left: pos.left,
            width: pos.width,
            opacity: pos.opacity,
          }}
          className="absolute h-12 w-20 bg-black rounded-full duration-300 ease-in-out"
        />
      </ul>
    </nav>
  );
}

export default NavMenuSlideSwitch;

const Tab = ({ tab, setState }) => {
  return (
    <li
      className="relative z-10 py-3 px-5 text-white mix-blend-difference uppercase cursor-pointer"
      onMouseEnter={(e) =>
        setState({
          left: e.currentTarget.offsetLeft,
          width: e.currentTarget.offsetWidth,
          opacity: 1,
        })
      }
    >
      {tab}
    </li>
  );
};
