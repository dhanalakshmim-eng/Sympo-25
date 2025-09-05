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


import Eloquence from "./Pages/EventDescriptions/Track1/Eloquence.jsx";
import VizYourWay from "./Pages/EventDescriptions/Track1/VizYourWay.jsx";
import EnergiaNova from "./Pages/EventDescriptions/Track2/EnergiaNova.jsx";
import GhostOps from "./Pages/EventDescriptions/Track1/GhostOps.jsx";
import FF from "./Pages/EventDescriptions/NonTech/FF.jsx";
import BGMI from "./Pages/EventDescriptions/NonTech/BGMI.jsx";
import Wizzup from "./Pages/EventDescriptions/Track1/Wizzup.jsx";
import Contact from "./Pages/Contact.jsx";
import CodeSprint from "./Pages/EventDescriptions/Track1/CodeSprint.jsx";
import MatterMind from "./Pages/EventDescriptions/Track1/MatterMind.jsx";
import Ciniphilia from "./Pages/EventDescriptions/NonTech/Ciniphilia.jsx";
import MysteryVault from "./Pages/EventDescriptions/NonTech/MysteryVault.jsx";
import DeadlyDeeds from "./Pages/EventDescriptions/NonTech/DeadlyDeeds.jsx";
import Bizqueset from "./Pages/EventDescriptions/Track2/Bizqueset.jsx";
import Batallia from "./Pages/EventDescriptions/Track2/Batallia.jsx";
import TescaFlow from "./Pages/EventDescriptions/Track2/TescaFlow.jsx";
import IPL from "./Pages/EventDescriptions/NonTech/IplAuction.jsx";
import Cassedete from "./Pages/EventDescriptions/Track1/Cassedete.jsx";
import TeamCarousel from "./Pages/TeamCarousel.jsx";

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
        path: "/eloquence",
        element: <Eloquence />,
      },
      {
        path: "/vizyourway",
        element: <VizYourWay />,
      },
      {
        path: "/energianova",
        element: <EnergiaNova />,
      },
      {
        path: "/cassedete",
        element: <Cassedete />,
      },
      {
        path: "/batallia",
        element: <Batallia />,
      },
      {
        path: "/tescaflow",
        element: <TescaFlow />,
      },
      {
        path: "/ghostops",
        element: <GhostOps />,
      },
      {
        path: "/codesprint",
        element: <CodeSprint />,
      },
      {
        path: "/mysteryvault",
        element: <MysteryVault />,
      },
      {
        path: "/deadlydeeds",
        element: <DeadlyDeeds />,
      },
      {
        path: "/mattermind",
        element: <MatterMind />,
      },
      {
        path: "/ff",
        element: <FF />,
      },
      {
        path: "/bgmi",
        element: <BGMI />,
      },
      {
        path: "/iplauction",
        element: <IPL />,
      },
      {
        path: "/bizqueset",
        element: <Bizqueset />,
      },
      {
        path: "/circuit",
        element: <Circuit />,
      },
      {
        path: "/cinephilia",
        element: <Ciniphilia />,
      },
      {
        path: "/cassedete",
        element: <Cassedete />,
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
        path: "/wizzup",
        element: <Wizzup />,
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
