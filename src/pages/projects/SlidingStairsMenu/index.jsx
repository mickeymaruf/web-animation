import { animate, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion, stagger } from "framer-motion";

function SlidingStairsMenu() {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      {/* menu button */}
      <button
        type="button"
        onClick={() => setOpened(true)}
        className="bg-black w-40 h-32 fixed z-10 right-0 top-0 text-white hover:text-black cursor-pointer group duration-300"
      >
        <div className="absolute top-0 left-0 bg-[#c0e200] w-full h-0 group-hover:h-full duration-300"></div>
        <div className="h-full flex flex-col p-5 absolute inset-0">
          <div className="w-20 h-px bg-white group-hover:bg-black duration-300 mb-2 ml-auto"></div>
          <div className="w-14 h-px bg-white group-hover:bg-black duration-300 ml-auto"></div>

          <p className="mt-auto">MENU</p>
        </div>
      </button>

      {/* <ul className="absolute top-1/2 -translate-y-1/2 w-full h-fit text-white text-center font-light text-9xl uppercase">
        <div className="space-y-5 ">
          <li className="block w-full border-b border-t">Home</li>
          <li className="block w-full border-b">About</li>
          <li className="block w-full border-b">Contact</li>
        </div>
      </ul>*/}

      {/* make the first button animated with two lines crossing cool */}

      <AnimatePresence>
        {opened && (
          <motion.div
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1,
                },
              },
              exit: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            animate="animate"
            exit="exit"
            className="w-full h-screen flex"
          >
            {/* close btn */}
            <motion.button
              type="button"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ bounce: false }}
              onClick={() => setOpened(false)}
              className="bg-black w-40 h-32 fixed right-0 top-0 z-50 text-white hover:text-[#c0e200] cursor-pointer flex items-center justify-center"
            >
              <div className="bg-white w-px h-full absolute top-0 -rotate-45"></div>
              <div className="bg-white w-px h-full absolute top-0 rotate-45"></div>
            </motion.button>
            {/* close btn */}

            {[...Array(5)].map((_, idx) => (
              <motion.div
                key={idx}
                variants={{
                  animate: { height: "100%", transition: { duration: 0.4 } },
                  exit: { height: 0, transition: { duration: 0.3 } },
                }}
                transition={{ ease: [0.33, 1, 0.68, 1] }}
                className="h-0 w-full bg-black"
              ></motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SlidingStairsMenu;
