import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div<{ size: number }>`
  color: #c9c9c9;
  font-family: "Gowun Batang", serif;
  font-size: ${(props) => props.size + "px"};
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(90deg);
  position: absolute;
  left: -50px;
  top: 230px;
  hr {
    margin-left: 0px;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
  }
`;

export const ExplainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 30px;
`;

export const Explain = styled.div`
  color: #c9c9c9;
  opacity: 0.5;
  font-size: 30px;
  font-family: "Gowun Batang", serif;
  position: absolute;
`;

export const SchoolPaperContent = styled.div`
  width: 814px;
  height: 771px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 30px;
  right: 74px;
  color: #c9c9c9;
  font-family: "Gowun Batang", serif;
  &::-webkit-scrollbar {
    background-color: #909090;
    border-radius: 5px;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 3px;
    width: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Slide = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  cursor: pointer;
  div {
    margin-top: -20px;
    font-size: 70px;
    color: #4e4e4e;
    opacity: 1;
  }
`;
