import styled from "styled-components";

export const Secao = styled.section`
  display: flex;
  justify-content: center;
  height: 80vh;
  width: 30vw;

  @media (max-width: 750px) {
    height: 35vh;
    width: 50vw;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 750px) {
    width: 45vw;
  }

  img {
    width: 25vw;
  }

  h4 {
    color: white;
  }

  button {
    background-color: #c23112;
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    cursor: pointer;

    @media (max-width: 750px) {
      width: 18vw;
      font-size: 0.7rem;
    }
  }
`;
