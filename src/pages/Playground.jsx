import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Playground() {
  const [show, setShow] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <AnimatePresence mode="sync">
        {show && (
          <motion.div
            animate={{ y: -100 }}
            exit={{ y: 0, scale: 0 }}
            className="w-32 h-32 bg-[crimson] rounded-lg"
          ></motion.div>
        )}
      </AnimatePresence>

      <button
        className="bg-gray-800 px-5 py-2 rounded-lg text-white shadow border cursor-pointer mt-5"
        onClick={() => setShow(!show)}
      >
        Show
      </button>
    </div>
  );
}

export default Playground;
