import styled from "styled-components";

export const SchoolPaper = styled.div`
  height: 730px;
  width: 100%;
  padding: 0px 74px 0px 78px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const SchoolPaperTitle = styled.div`
  position: absolute;
  top: 0;
  left: 128px;
  font-size: 70px;
  color: #c9c9c9;
  font-weight: 500;
  hr {
    margin-left: 0px;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
  }
  div {
    margin-top: -40px;
    font-family: "Gowun Batang", serif;
  }
`;

export const SchoolPaperContent = styled.div`
  width: 704px;
  height: 700px;
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
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  div {
    margin-top: -20px;
    font-size: 70px;
    color: #4e4e4e;
    opacity: 1;
  }
`;

export const View = styled.div`
  width: 764px;
  box-sizing: border-box;
  padding: 12px 20px 0 0;
  display: flex;
  justify-content: flex-end;
  color: #c9c9c9;
  font-weight: bold;
  font-size: 20px;
  font-family: "Gowun Batang", serif;
  a:link {
    text-decoration: none;
    color: #c9c9c9;
  }
  a:visited {
    color: #c9c9c9;
  }
`;
