import styled from "styled-components";

export const PostDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 55px;
  grid-column-gap: 30px;
  width: 1522px;
  height: 680px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
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

export const ExplainContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 38px;
`;

export const Explain = styled.div`
  display: flex;
  color: #c9c9c9;
  opacity: 0.5;
  font-family: "Gowun Batang", serif;
  font-size: 30px;
`;

export const PostContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 75px;
  margin-top: 150px;
`;
export const Title = styled.div<{ size: number }>`
  color: #c9c9c9;
  font-family: "Gowun Batang", serif;
  font-size: ${(props) => props.size + "px"};
`;

export const SubDiv = styled.div`
  width: 398px;
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

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
