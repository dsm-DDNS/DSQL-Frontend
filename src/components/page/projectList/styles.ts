import styled from "styled-components";

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
  top: 250px;
  hr {
    margin-left: 0px;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
  }
`;

export const List = styled.div`
  width: 1449px;
  height: 750px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 27px;
  grid-column-gap: 52px;
  position: absolute;
  right: 139px;
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
