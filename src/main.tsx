import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoadmapPage from "./pages/RoadmapPage.tsx";
import LessonPage from "./pages/LessonPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import { translations } from "./lang.ts";
import { slugify } from "./lib/utils.ts";

if (!localStorage.getItem("sections")) {
  console.log("LS item not found: creating LS item");

  let localSectionData = translations.roadmapData.map((el, i) => ({
    index: i,
    slug: slugify(el.title.en),
    locked: i == 0 ? false : true,
  }));

  localStorage.setItem("sections", JSON.stringify(localSectionData));
  console.log("LS item created");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "roadmap",
    element: <RoadmapPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },

  {
    path: "lessons/:lessionId",
    element: <LessonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
