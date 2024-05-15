import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoadmapPage from "./pages/RoadmapPage.tsx";
import LessonPage from "./pages/LessonPage.tsx";

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
    path: "lessons/:lessionId",
    element: <LessonPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
