import styled from "styled-components";

export const SchoolPaper = styled.div`
  height: 885px;
  width: 100%;
  padding: 0px 74px 0px 78px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const SchoolPaperTitle = styled.div`
  width: 842px;
  height: 540px;
  position: relative;
`;

export const Month = styled.div`
  font-size: 400px;
  position: absolute;
  top: 0;
  color: #a582c2;
`;

export const SchoolPaperSubTitle = styled.div`
  font-size: 70px;
  position: absolute;
  top: 100px;
  right: 0;
  hr {
    margin-left: 0px;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
  }
  div {
    margin-top: -40px;
  }
`;

export const SchoolPaperContent = styled.div`
  width: 764px;
  height: 885px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 30px;
  position: absolute;
  right: 74px;
  &::-webkit-scrollbar {
    background-color: #e3e3e3;
    border-radius: 5px;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 3px;
    width: 3px;
  }
`;
