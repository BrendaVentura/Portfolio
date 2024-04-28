import React from "react"
import Header from "../../components/header/Header"
import * as S from "./inicio_styled"
import Brenda from "../../assets/Brenda.jpeg"

export default function Inicio() {
  return (
    <S.Main>
        <Header />

        <S.Section>
            <div>
              <h1>Bem-vindo, eu sou <span>Brenda Ventura</span></h1>         
            
              <img src={Brenda} alt="" />
            </div>        
        </S.Section>
    </S.Main>
  )
}
