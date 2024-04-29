import styled from "styled-components";

export const Main = styled.main`
  background-color: #212529;
  height: 100vh;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90%;

  @media (max-width: 700px) {
    height: 82vh;
  }
`;

export const Texto = styled.p`
  color: white;
  width: 60vw;
  height: 50vh;
  text-align: justify;
  font-size: 1.3rem;

  @media (max-width: 700px) {
    font-size: 0.7rem;
    height: 55vh;
  }

  span {
    color: #c23112;
  }
`;

export const Imagens = styled.figure`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  height: 15vh;

  @media (max-width: 700px) {
    width: 100%;
    height: 10vh;
  }

  img {
    width: 10wv;
    height: 11vh;

    @media (max-width: 700px) {
      width: 8vw;
      height: 8vh;
    }
  }
`;
