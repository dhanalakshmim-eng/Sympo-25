import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Error from "./Components/Error.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Pages/Body.jsx";

import EventContainer from "./Pages/EventContainer.jsx";



import Circuit from "./Pages/Circuit.jsx";

import NonCircuit from "./Pages/NonCircuit.jsx";
import NewAbout from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

import TeamCarousel from "./Pages/TeamCarousel.jsx";
import Cinephilia from "./Pages/EventDesc/Cinephilia.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/events",
        element: <EventContainer />,
      },
      
      {
        path: "/circuit",
        element: <Circuit />,
      },
      
      {
        path: "/track2",
        element: <Circuit />,
      },
     
      {
        path: "/track1",
        element: <NonCircuit />,
      },
    

      {
        path: "/about",
        element: <NewAbout />,
      },
     
      {
        path: "/contact",
        element: <Contact />,
      },
      
      {
        path: "/team",
        element: <TeamCarousel/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
