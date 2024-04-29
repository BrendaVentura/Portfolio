import styled from "styled-components";

export const Main = styled.main`
  background-color: #212529;
  height: 100vh;


  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 2rem;
  width: 99vw;
  height: 82vh;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 3px dashed #c23112;
    width: 90vw;
    height: 70vh;

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: space-between;
      border: none;
      height: 80%;
    }
  }

  h2 {
    width: 50vw;

    @media (max-width: 600px) {
      font-size: 50%;
    }
  }

  span {
    color: #c23112;
  }

  img {
    width: 20vw;
    height: 50vh;
    border-radius: 50%;

    @media (max-width: 600px) {
      width: 45vw;
      height: 35vh;
    }
  }
`;
