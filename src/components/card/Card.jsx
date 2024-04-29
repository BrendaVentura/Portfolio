import * as S from "./card_styled";

import React from "react";

export default function Card({ imagem, texto, link }) {
  return (
    <S.Secao>
      <S.Card>
        <img src={imagem} alt="" />
        <h4>{texto}</h4>
        <a href={link} target="_blank">
          <button>Repositório</button>
        </a>
      </S.Card>
    </S.Secao>
  );
}
