import Lenis from "lenis";
import { useEffect } from "react";
import { RouterProvider } from "react-router";
import router from "./routes/router";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
