import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "./components/FontawesomeIcons";

import Navigation from "./components/Extras/Navigation";
import CargosPage from "./components/CargosPage/CargosPage";
import ClientesPage from "./components/ClientesPage/ClientesPage";
import CreateCargo from "./components/CreateCargoPage/CreateCargo";
import Abonar from "./components/AbonaPage/Abonar";
import Home from "./components/HomePage/Home";
import AgregaUsuario from "./components/AgregaUsuarioPage/AgregaUsuario";
import EditarCargo from "./components/Extras/EditarCargo";
import InversionistasPage from "./components/InversionistasPage/InversionistasPage";
import AgregaInversionista from "./components/AgregaInversionistaPage/AgregaInversionista";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={Home} />
        <Route path="/nuevoUsuario" component={AgregaUsuario} />
        <Route path="/listaCargosTarjetasVenta/:id" component={CargosPage} />
        <Route path="/listaCargosTarjetasDeuda/:id" component={CargosPage} />
        <Route path="/listaCargosInversiones/:id" component={CargosPage} />
        <Route path="/clientesBanco/:id" component={ClientesPage} />
        <Route path="/clientesInv/:id" component={ClientesPage} />
        <Route path="/creaCargo" component={CreateCargo} />
        <Route path="/editarCargo/:id" component={EditarCargo} />
        <Route path="/abona/:id" component={Abonar} />
        <Route path="/inversionistas" component={InversionistasPage} />
        <Route path="/creaInversionista" component={AgregaInversionista} />
      </div>
    </Router>
  );
}

export default App;
