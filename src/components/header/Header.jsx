import React from "react"
import * as S from "./header_styled"
import { Link } from "react-router-dom"

export default function Header() {


  return (
    <S.Header>
      <S.Navbar>
        <ul>
            <Link to="/"><li>Início</li></Link>
            <Link to="/Sobre"><li>Sobre mim</li></Link>
            <Link to="/Projetos"><li>Projetos</li></Link>
        </ul>
      </S.Navbar>
    </S.Header>
  )
}
