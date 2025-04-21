import React from "react";
import {
  BsAlexa,
  BsAmazon,
  BsApple,
  BsGoogle,
  BsGooglePlay,
  BsLinkedin,
  BsSpotify,
  BsStripe,
  BsTiktok,
} from "react-icons/bs";
import { useAnimate } from "framer-motion";
import { GiConsoleController } from "react-icons/gi";

function StripeFancyHoverAnimation() {
  return (
    <section className="bg-gray-100 min-h-screen p-20">
      <div className="max-w-4xl mx-auto border divide-y">
        <div className="grid grid-cols-2 divide-x">
          <Icon Icon={BsGoogle} />
          <Icon Icon={BsGooglePlay} />
        </div>
        <div className="grid grid-cols-4 divide-x">
          <Icon Icon={BsApple} />
          <Icon Icon={BsSpotify} />
          <Icon Icon={BsLinkedin} />
          <Icon Icon={BsTiktok} />
        </div>
        <div className="grid grid-cols-3 divide-x">
          <Icon Icon={BsAlexa} />
          <Icon Icon={BsAmazon} />
          <Icon Icon={BsStripe} />
        </div>
      </div>
    </section>
  );
}

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0%, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: ["polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)", NO_CLIP], // NO CLIP (DEFAULT CSS APPLIED INLINE) to FULL CLIP USING THIS DIRECTION PATH
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, "polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)"],
  top: [NO_CLIP, "polygon(0 0, 100% 0, 0 0, 0% 100%)"],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const Icon = ({ Icon }) => {
  const [scope, animate] = useAnimate();

  return (
    <div
      onMouseEnter={(e) => {
        const side = getNearestSide(e);

        animate(scope.current, {
          clipPath: ENTRANCE_KEYFRAMES[side],
        });
      }}
      onMouseLeave={(e) => {
        const side = getNearestSide(e);

        animate(scope.current, {
          clipPath: EXIT_KEYFRAMES[side],
        });
      }}
      className="relative"
    >
      <div className="px-10 py-16 grid place-content-center">
        <Icon size={25} />
      </div>

      <div
        ref={scope}
        style={{ clipPath: "polygon(0 0, 100% 0, 0 0, 0 100%)" }}
        className="absolute inset-0 px-10 py-16 grid place-content-center bg-black text-white"
      >
        <Icon size={25} />
      </div>
    </div>
  );
};

const getNearestSide = (e) => {
  const { left, right, top, bottom } = e.currentTarget.getBoundingClientRect();

  const proximityLeft = {
    proximity: Math.abs(left - e.clientX),
    side: "left",
  };
  const proximityRight = {
    proximity: Math.abs(right - e.clientX),
    side: "right",
  };
  const proximityTop = {
    proximity: Math.abs(top - e.clientY),
    side: "top",
  };
  const proximityBottom = {
    proximity: Math.abs(bottom - e.clientY),
    side: "bottom",
  };

  const sortedProximity = [
    proximityLeft,
    proximityRight,
    proximityTop,
    proximityBottom,
  ].sort((a, b) => a.proximity - b.proximity);

  return sortedProximity[0].side;
};

export default StripeFancyHoverAnimation;
