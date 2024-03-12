import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./components/Home";
// import Blog from "./components/Blog/Blog";

function App() {
  const Blogs = React.lazy(() => import("./components/pages/Blogs"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blogs"
          element={
            <Suspense fallback="Loading...">
              <Blogs />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
