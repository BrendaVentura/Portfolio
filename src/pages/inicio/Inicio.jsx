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
              <h2>Olá, meu nome é <span>Brenda Ventura</span> e estou muito entusiasmada em entrar no mundo do desenvolvimento front end.</h2>         
            
              <img src={Brenda} alt="" />
            </div>        
        </S.Section>
    </S.Main>
  )
}
