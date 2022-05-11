import styled from "styled-components";

export const MainDiv = styled.div`
  width: 100%;
`;

export const Banner = styled.div`
  width: 100%;
  height: 1000px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExplainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 100px 0px 126px;
`;

export const Explain = styled.div`
  display: flex;
  color: #c9c9c9;
  font-size: 30px;
`;

export const ProjectList = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 127px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

export const Footer = styled.div`
  margin: 65px 0px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 167px;
  display: inline-flex;
  justify-content: space-between;
`;

export const Developer = styled.div`
  position: relative;
  width: 276px;
  height: 98px;
  hr {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
  }
  div {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 70px;
  }
`;
