import styled from "styled-components";

export const Post = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 937px;
  margin-top: 300px;
`;

export const Bundle = styled.div`
  position: absolute;
  top: 100px;
`;

export const InputPost = styled.div`
  margin-top: 60px;
  position: relative;
  right: 0px;

  span {
    font-family: "Gowun Batang", serif;
    position: absolute;
    top: -50px;
    left: 30px;
    z-index: 2;
    background-color: #262626;
    color: #c9c9c9;
    font-size: 58px;
    height: 60px;
    padding: 0px 10px;
  }

  div,
  input,
  textarea {
    font-family: "Gowun Batang", serif;
    width: 700px;
    border: 1px solid #c9c9c9;
    font-size: 25px;
    background: none;
    padding: 20px 40px;
    box-sizing: border-box;
    resize: none;
    overflow-x: hidden;
    overflow-y: hidden;
    outline: none;
    color: #c9c9c9;
    margin-right: 10px;
  }

  div {
    /* position: absolute; */
    margin-bottom: 10px;
  }

  input {
    position: relative;
    height: 80px;
  }

  input[type="date"]::-webkit-clear-button,
  input[type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    cursor: pointer;
    z-index: 1;
  }

  input:after {
    position: absolute;
    top: 50%;
    right: 45px;
    content: "";
    width: 20px;
    height: 22px;

    background: no-repeat #262626
      url("https://cdn.discordapp.com/attachments/857970124219613184/1011521885697224704/calendar-icon-white-592896.png")
      center center / contain;
    transform: translateY(-50%);
    z-index: 0;
  }
`;

export const Select = styled.button`
  width: 120px;
  height: 40px;
  font-size: 20px;
  right: 10px;
  font-family: "Gowun Batang", serif;
  position: absolute;
  background-color: #c9c9c9;
  outline: none;
  border-radius: 4px;
  border: none;
`;

export const flieInput = styled.input`
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 120px;
  height: 40px;
  opacity: 0;
`;

export const AddButton = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 16px;
`;

export const ButtonPost = styled.button`
  position: absolute;
  right: 10px;
  margin-top: 10px;
  width: 100px;
  height: 40px;
  border-radius: 4px;
  background-color: #c9c9c9;
  font-size: 25px;
  font-family: "Gowun Batang", serif;
  border: none;
  outline: none;
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
  bottom: 300px;

  hr {
    margin-left: 0px;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
  }
`;
