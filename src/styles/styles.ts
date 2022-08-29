import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body { // 드래그 방지
    margin: 0;
    padding: 0;
    background-color: #262626;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    background-color: #262626;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C9C9C9;
    border-radius: 3px;
    width: 10px;
  }
  }
`;

export default GlobalStyle;
