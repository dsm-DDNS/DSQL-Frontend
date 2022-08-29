import styled from "styled-components";

export const Project = styled.div`
  width: 404px;
  height: 700px;
  border-radius: 0 0 17px 17px;
  background-color: #483b52;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 0 17px #000000;
`;

export const ProjectContent = styled.div`
  width: 370px;
  height: 150px;
  color: #fff;
  text-align: center;
  font-size: 28px;
  margin-top: 42px;
  font-family: "Gowun Batang", serif;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProjectImage = styled.div`
  margin-top: 59px;
  display: inline-flex;
  align-items: center;
  position: relative;
  img {
    width: 327px;
    height: 154px;
    object-fit: cover;
  }
`;

export const Slide = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  div {
    margin-top: -8px;
    font-size: 30px;
    color: #4e4e4e;
    opacity: 1;
  }
`;

export const ClubName = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 70px;
    object-fit: cover;
  }
`;

export const DeveloperList = styled.div`
  width: 290px;
  height: 107px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 40px;
  margin-top: 30px;
`;

export const Developer = styled.div`
  display: inline-flex;
  color: #ffffff;
  font-size: 20px;
  font-family: "Gowun Batang", serif;
`;


export const Period = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  position: absolute;
  bottom: 15px;
  font-family: "Gowun Batang", serif;
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
`;
