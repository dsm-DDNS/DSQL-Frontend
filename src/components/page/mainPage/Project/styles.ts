import styled from "styled-components";

export const Project = styled.div<{ color: string }>`
  width: 404px;
  height: 600px;
  border-radius: 17px 17px 0 0;
  background-color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 0 17px #707070;
`;

export const ProjectContent = styled.div`
  width: 370px;
  height: 157px;
  color: #fff;
  text-align: center;
  font-size: 28px;
  margin-top: 44px;
`;

export const ProjectImage = styled.div`
  margin-top: 59px;
  width: 327px;
  height: 154px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ClubName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 80px;
    object-fit: cover;
  }
`;
