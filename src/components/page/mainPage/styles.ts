import styled from "styled-components";
import bannerImage from "../../../asset/img/banner.png";

export const MainDiv = styled.div`
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: 100vh;
  /* overflow-y: hidden; */
  &::-webkit-scrollbar {
    display: none;
  }

  background-color: #262626;
  z-index: 2;
`;

export const Background = styled.div`
  background-color: #000;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  scroll-snap-align: start;

  div {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #c9c9c9;

    p {
      opacity: 1;
      text-align: center;
    }
  }
`;

export const ProjectContainer = styled.div`
  background-color: #c9c9c9;
  margin-top: 146px;
  height: 125vh;
`;

export const Title = styled.a`
  font-size: 100px;
  font-weight: 500;
`;

export const Description = styled.a`
  font-size: 40px;
`;

export const View = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 150px;
  top: 30px;
  font-size: 20px;
  color: #c9c9c9;
  font-family: "Gowun Batang", serif;
  font-weight: bold;
  a:link {
    text-decoration: none;
    color: #c9c9c9;
  }
  a:visited {
    color: #c9c9c9;
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
  opacity: 0.5;
  font-size: 30px;
  font-family: "Gowun Batang", serif;
`;

export const ProjectList = styled.div`
  width: 100%;
  position: relative;
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
  font-family: "Gowun Batang", serif;
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
    color: #fff;
  }
`;

export const Project = styled.div<{ marginNumber: number }>`
  margin-top: ${(props) => props.marginNumber}px;
`;
