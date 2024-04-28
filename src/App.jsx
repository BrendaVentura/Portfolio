import React from "react"
import { GlobalStyled } from "./components/header/header_styled"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/inicio/Inicio"
import Sobre from "./pages/sobre/Sobre"
import Projetos from "./pages/projetos/Projetos"

export default function App() {
  return (
    <>
      <GlobalStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Projetos" element={<Projetos />} />
        </Routes>
      </BrowserRouter>
 
    </>
  )
}
