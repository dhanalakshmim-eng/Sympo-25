import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Error from "./Components/Error.jsx";
import Footer from "./Sections/Footer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Pages/Body.jsx";
import TechEvent from "./Sections/TechEvent.jsx";
import EventContainer from "./Components/EventContainer.jsx";
import EventDetails from "./Components/EventDetails.jsx";
import Home from "./Pages/Home.jsx";

import Circuit from "./Pages/Circuit.jsx";
import CircuitTec from "./Pages/CircuitTec.jsx";
import CircuitnTech from "./Pages/CircuitnTech.jsx";
import NonCircuitTec from "./Components/NonCircuitTec.jsx";
import NonCircuitnTech from "./Components/NonCircuitnTech.jsx";
import NonCircuit from "./Components/NonCircuit.jsx";
import NewAbout from "./Pages/About.jsx";
import Tracks from "./Pages/Tracks.jsx";
import EventDescription from "./Components/EventDescription.jsx";
import Eloquence from "./Components/EventDescriptions/Track1/Eloquence.jsx";
import VizYourWay from "./Components/EventDescriptions/Track1/VizYourWay.jsx";
import EnergiaNova from "./Components/EventDescriptions/Track2/EnergiaNova.jsx";
import GhostOps from "./Components/EventDescriptions/Track1/GhostOps.jsx";
import FF from "./Components/EventDescriptions/NonTech/FF.jsx";
import BGMI from "./Components/EventDescriptions/NonTech/BGMI.jsx";
import Wizzup from "./Components/EventDescriptions/Track1/Wizzup.jsx";
import Contact from "./Pages/Contact.jsx";
import CodeSprint from "./Components/EventDescriptions/Track1/CodeSprint.jsx";
import MatterMind from "./Components/EventDescriptions/Track1/MatterMind.jsx";
import Ciniphilia from "./Components/EventDescriptions/NonTech/Ciniphilia.jsx";
import MysteryVault from "./Components/EventDescriptions/NonTech/MysteryVault.jsx";
import DeadlyDeeds from "./Components/EventDescriptions/NonTech/DeadlyDeeds.jsx";
import Bizqueset from "./Components/EventDescriptions/Track2/Bizqueset.jsx";
import Batallia from "./Components/EventDescriptions/Track2/Batallia.jsx";
import TescaFlow from "./Components/EventDescriptions/Track2/TescaFlow.jsx";
import IPL from "./Components/EventDescriptions/NonTech/IplAuction.jsx";
import Cassedete from "./Components/EventDescriptions/Track1/Cassedete.jsx";
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
        path: "/events/circuit-tech",
        element: <CircuitTec />,
      },
      {
        path: "/events/circuit-non-tech",
        element: <NonCircuitnTech />,
      },
      {
        path: "/track1",
        element: <NonCircuit />,
      },
      {
        path: "/events/non-circuit-tech",
        element: <NonCircuitTec />,
      },
      {
        path: "/events/non-circuit-non-tech",
        element: <NonCircuitnTech />,
      },
      {
        path: "/event/paper",
        element: <EventDescription />,
      },

      {
        path: "/about",
        element: <NewAbout />,
      },
      {
        path: "/events/tech",
        element: <TechEvent />,
      },
      {
        path: "/events/tech/:id",
        element: <EventDetails />,
      },
      {
        path: "/home",
        element: <Home />,
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
