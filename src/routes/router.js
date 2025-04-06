import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ParallaxSectionTransition from "../pages/projects/ParallaxSectionTransition";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/parallax-section-transition",
    Component: ParallaxSectionTransition,
  },
]);

export default router;
