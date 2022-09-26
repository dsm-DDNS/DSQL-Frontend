import styled from "styled-components";

export const MainDiv = styled.div`
  position: fixed;
  left: 0;
  transform: translateY(-50%);
  z-index: 99;
  mix-blend-mode: difference;
`;

export const Section = styled.div`
  margin-top: 100px;

  hr {
    width: 100px;
    margin-left: -10px;
    height: 10px;
    border: none;
    background-color: #242424;
    filter: invert(100%);
    transform: rotateZ(270deg);
    transition: 0.3s;
  }

  div {
    margin-left: 70px;
    font-size: 20px;
    color: #242424;
    filter: invert(100%);
  }
`;

export const Nav = styled.a`
  width: 100px;
  height: 70px;
  text-decoration: none;
`;
