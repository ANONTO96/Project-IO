import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllProjects from "../pages/Projects/AllProjects";
import Project from "../pages/Project/Project";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          const res = await fetch('/ProjectsData.json');
          const data = await res.json();
          return data;
        }
      },
      {
        path: "/Projects",
        Component: AllProjects,
        loader: async () => {
          const res = await fetch('/ProjectsData.json');
          const data = await res.json();
          return data;
        }
      },
      {
        path: "/Projects/:id",
        Component: Project,
        loader: async ({ params }) => {
          const res = await fetch('/ProjectsData.json');
          const data = await res.json();
          const project = data.find(p => p.id === Number(params.id));
          return project;
        }
      },
      {
        path: "/Installation",
        Component: Installation,
      }
    ],
  },
]);