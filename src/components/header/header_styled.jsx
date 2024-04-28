import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #212529;
  font-size: 1.5rem;
  height: 10vh;

  @media (max-width: 600px) {
    height: 18vh;
    font-size: 1rem;
  }
`;

export const Navbar = styled.nav`
  width: 70%;

  @media (max-width: 600px) {
    width: 100%;
  }

  ul {
    display: flex;
    justify-content: space-around;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;
      height: 18vh;
      width: 100%;
    }
  }

  li {
    list-style-type: none;

    @media (max-width: 600px) {
      border-bottom: 1px solid #c23112;
      width: 100vw;
      text-align: center;
    }
  }

  a {
    color: white;
    text-decoration: blink;
  }

  a:hover {
    color: #c23112;
  }
`;
