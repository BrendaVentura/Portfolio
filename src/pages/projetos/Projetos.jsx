import React from "react";
import Header from "../../components/header/Header";
import * as S from "./projetos_styled";
import prime from "../../assets/prime.png";
import selfcare from "../../assets/selfcare.png";
import mcdonalds from "../../assets/mcdonalds.png";
import Card from "../../components/card/Card";

export default function Projetos() {
  return (
    <S.Main>
      <Header />
      
      <S.Container>
        <Card imagem={prime} texto={"Prime Vídeo"} link={"https://github.com/BrendaVentura/Prime-Video"} />
        <Card imagem={selfcare} texto={"Self Care"} link={"https://github.com/BrendaVentura/Self-Care"} />
        <Card imagem={mcdonalds} texto={"Mc Donald's"} link={"https://github.com/BrendaVentura/Desafio-3/tree/main/mcdonalds"}/>
      </S.Container>
    </S.Main>
  );
}
