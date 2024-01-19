import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Motocross from "./paginas/Motocross";
import Motos from "./componentes/Motos";
import Deportivas from "./paginas/Deportivas";
import Scooter from "./paginas/Scooter";
import Contacto from "./paginas/Contacto";
import API from "./paginas/API";

function App() {
  return (
    <BrowserRouter>
    <Menu />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Routes>
    <Route path="/" element={<Motos />}/>
    <Route path="contacto" element={<Contacto />}/>
    <Route path="motocross" element={<Motocross />}/>
    <Route path="deportivas" element={<Deportivas />}/>
    <Route path="scooter" element={<Scooter />}/>
    <Route path="api" element={<API />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
