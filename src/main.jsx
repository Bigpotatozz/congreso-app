import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Inicio from "./components/inicio/inicio.jsx";
import Participantes from "./components/Participantes.jsx";
import Registro from "./components/Registro.jsx";
import { Gafete } from "./components/gafete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Inicio></Inicio>,
      },
      {
        path: "/participantes",
        element: <Participantes></Participantes>,
      },
      {
        path: "/registro",
        element: <Registro></Registro>,
      },
      {
        path: "/gafete/:id",
        element: <Gafete></Gafete>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
