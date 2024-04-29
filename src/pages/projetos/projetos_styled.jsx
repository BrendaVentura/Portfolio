import styled from "styled-components";

export const Main = styled.main`
  background-color: #212529;
  height: 100vh;

  @media (max-width: 700px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80%;

  @media (max-width: 750px) {
    flex-direction: column;
    height: 130vh;
  }
`;
