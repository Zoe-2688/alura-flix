import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import PaginaBase from "Pages/PaginaBase/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;


//SE MANEJAN RUTAS DESDE ESTA FUNCION 