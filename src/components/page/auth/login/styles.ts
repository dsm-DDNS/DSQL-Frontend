import styled from "styled-components";

export const LoginDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 70px;
  font-family: "Gowun Batang", serif;
  margin-bottom: 30px;
`;

export const LoginInput = styled.div`
  margin-bottom: 10px;
  input {
    width: 600px;
    height: 70px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #262626;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    color: #c9c9c9;
    padding-left: 30px;
    font-size: 30px;
    font-family: "Gowun Batang", serif;
    box-sizing: border-box;
  }
`;

export const LoginBtn = styled.div`
  width: 600px;
  height: 70px;
  border-radius: 5px;
  background-color: #c9c9c9;
  color: #262626;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gowun Batang", serif;
  cursor: pointer;
`;
