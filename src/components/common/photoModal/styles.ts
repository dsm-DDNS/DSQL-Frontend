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
  color: #c9c9c9;
`;

export const Container = styled.div`
  display: flex;

  /* div {
    margin-left: 30px;
  } */
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
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
