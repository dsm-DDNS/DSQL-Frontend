import styled from "styled-components";

export const SignUpDiv = styled.div`
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

export const SignUpInput = styled.div`
  margin-bottom: 10px;
  position: relative;
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

export const SendBtn = styled.button`
  position: absolute;
  right: 0;
  width: 135px;
  height: 70px;
  background-color: #c9c9c9;
  color: #262626;
  border-radius: 0 5px 5px 0;
  border: none;
  font-family: "Gowun Batang", serif;
  outline: none;
  font-size: 28px;
`;

export const SignUpBtn = styled.div`
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

export const SignupSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 600px;
  height: 70px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #262626;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  color: #c9c9c9;
  font-size: 30px;
  font-family: "Gowun Batang", serif;
  padding-left: 30px;
  box-sizing: border-box;
  margin-bottom: 30px;

  option {
    width: 600px;
    height: 70px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: #c9c9c9;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    color: #262626;
    font-size: 30px;
    font-family: "Gowun Batang", serif;
    padding-left: 30px;
    box-sizing: border-box;
  }
`;
