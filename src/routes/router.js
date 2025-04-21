import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import ParallaxSectionTransition from "../pages/projects/ParallaxSectionTransition";
import Playground from "../pages/Playground";
import SlidingStairsMenu from "../pages/projects/SlidingStairsMenu";
import AwwwardsProjectGallery from "../pages/projects/AwwwardsProjectGallery";
import NavMenuSlideSwitch from "../pages/projects/nav-menu-slide-switch";
import StripeFancyHoverAnimation from "../pages/projects/stripe-fancy-hover-animation";

let router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/parallax-section-transition",
    Component: ParallaxSectionTransition,
  },
  {
    path: "/sliding-stairs-menu",
    Component: SlidingStairsMenu,
  },
  {
    path: "/awwwards-project-gallery",
    Component: AwwwardsProjectGallery,
  },
  {
    path: "/nav-menu-slide-switch",
    Component: NavMenuSlideSwitch,
  },
  {
    path: "/stripe-fancy-hover-animation",
    Component: StripeFancyHoverAnimation,
  },
  {
    path: "/playground",
    Component: Playground,
  },
]);

export default router;
