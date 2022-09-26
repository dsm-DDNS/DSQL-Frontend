import styled from "styled-components";

export const MainDiv = styled.div`
  z-index: 999;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #242424;
  width: 70vw;
  height: 70vh;
  padding: 30px;
  box-sizing: border-box;
  font-family: "Gowun Batang", serif;
  color: #c9c9c9;
`;

export const Container = styled.div`
  display: flex;

  /* div {
    margin-left: 30px;
  } */
`;

export const Content = styled.div`
  width: 100%;
  height: 100;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export const Description = styled.div`
  margin-top: 10px;
  height: 210px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background-color: #909090;
    border-radius: 5px;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 3px;
    width: 3px;
  }
`;

export const DeleteBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: #c9c9c9;
  font-size: 40px;
  cursor: pointer;
  margin-bottom: 30px;
`;

export const DeveloperList = styled.div`
  width: 290px;
  height: 80px;
  display: grid;
  place-items: start center;
  grid-template-columns: repeat(2, 1fr);
`;

export const Developer = styled.div`
  display: inline-flex;
  width: 150px;
  height: 10px;
  font-size: 15px;
`;

export const Pagination = styled.div`
  text-align: center;
  font-size: 30px;
`;

export const ShowDev = styled.div`
  span {
    color: #bcbcbc;
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
