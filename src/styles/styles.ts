import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body { // 드래그 방지
    margin: 0;
    padding: 0;
    &::-webkit-scrollbar {
    background-color: #fff;
    border-radius: 5px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 3px;
    width: 10px;
  }
  }
`;

export default GlobalStyle;
