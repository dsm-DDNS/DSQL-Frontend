import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 90px;
  width: 100%;
  background-color: #262626;
  position: absolute;
  z-index: 99;
  top: 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-end;
  /* mix-blend-mode: difference; */
`;

export const Sections = styled.span`
  margin-bottom: 15px;
  margin-right: 20px;
  text-align: end;
  margin-top: 1000px;

  a {
    margin-right: 20px;
    color: #c9c9c9;
    font-family: "Gowun Batang", serif;
    font-size: 19px;
    text-decoration: none;
  }
`;
