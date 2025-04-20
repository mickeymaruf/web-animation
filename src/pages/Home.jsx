import React from "react";
import { Link } from "react-router";
import router from "../routes/router";

function Home() {
  return (
    <div className="p-10">
      <h1 className="text-center text-xl font-semibold mb-10 underline decoration-wavy underline-offset-8">
        View My All Web Animations
      </h1>
      <ul className="list-disc">
        {router.routes.slice(1).map((r) => (
          <li key={r.id}>
            <Link to={r.path} className="text-blue-700 underline">
              {r.path.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
