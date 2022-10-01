/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*import Login from "./pages/Login";
import Admin from "./pages/Admin";

/*<Route path="/" element={<Login/>} />
*/
import React from "react";
import Admin from "./pages/AdminCliente";
import Login from "./pages/LoginCliente";
import Teste from "./pages/TesteForm";
import Edicao from "./pages/EdCliente";
import { BiEditAlt } from "react-icons/bi";
import { LoginCliente } from "./components/Login-cliente";

/*import Login from "./pages/LoginCliente";*/



function RoutesApp() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<Admin/>} />
      </Routes>

      <Routes>
        <Route path="/Login" element={<Login/>} />
      </Routes>

      <Routes>
        <Route path="/Teste" element={<Teste/>} />
      </Routes>

      <Routes>
        <Route path="/Edicao" element={<Edicao/>} />
      </Routes>

      <Routes>
        <Route path="/LoginCliente" element={<LoginCliente/>} />
      </Routes>




      

    </BrowserRouter>
    
  );
}

export default RoutesApp;
