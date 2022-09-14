import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 90px;
  width: 100%;
  background-color: #262626;
  position: absolute;
  z-index: 99;
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Sections = styled.span`
  margin-bottom: 15px;
  margin-right: 20px;

  a {
    margin-right: 20px;
    color: #c9c9c9;
    font-family: "Gowun Batang", serif;
    font-size: 19px;
    text-decoration: none;
  }
`;
