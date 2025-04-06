import React from "react";
import { Link } from "react-router";

function Home() {
  return (
    <div className="p-10">
      <h1 className="text-center text-xl font-semibold mb-10 underline decoration-wavy underline-offset-8">
        View My All Web Animations
      </h1>
      <ul className="list-disc">
        <li>
          <Link
            to="/parallax-section-transition"
            className="text-blue-700 underline"
          >
            ParallaxSectionTransition
          </Link>
        </li>
        <li>
          <Link
            to="/parallax-section-transition"
            className="text-blue-700 underline"
          >
            ParallaxSectionTransition
          </Link>
        </li>
        <li>
          <Link
            to="/parallax-section-transition"
            className="text-blue-700 underline"
          >
            ParallaxSectionTransition
          </Link>
        </li>
        <li>
          <Link
            to="/parallax-section-transition"
            className="text-blue-700 underline"
          >
            ParallaxSectionTransition
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
