import React from "react";
import Header from "../../components/header/Header";
import * as S from "./sobre_styled";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";

export default function Sobre() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.Texto>
          Atualmente, estou focada em aprimorar minhas habilidades e
          conhecimentos nesta área emocionante e em constante evolução. Venho
          estudando <span>html, css, javascript, react</span> e estou ansiosa para aplicar
          esses conhecimentos em projetos práticos. Embora esteja no início da
          minha jornada como desenvolvedora front-end, estou determinada a
          aprender continuamente e acompanhar as últimas tendências e melhores
          práticas. Estou aberta a novos desafios e oportunidades de aprendizado
          que me permitam crescer profissionalmente.
        </S.Texto>

        <S.Imagens>
          <img src={html} alt="Html" />
          <img src={css} alt="Css" />
          <img src={javascript} alt="JS" />
          <img src={react} alt="React" />
          <img src={styled} alt="Styled-components" />
        </S.Imagens>
      </S.Container>
    </S.Main>
  );
}
