import styled from "styled-components";

export const Project = styled.div`
  width: 680px;
  height: 420px;
  background-color: #483b52;
  border-radius: 17px;
  color: #fff;
  font-family: "Gowun Batang", serif;
`;

export const Logo = styled.div`
  margin: 20px;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;

export const PageImage = styled.div`
  img {
    width: 308px;
    height: 154px;
    object-fit: cover;
  }
`;

export const GridDiv = styled.div`
  position: relative;
  width: 600px;
  height: 300px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 9px;
  grid-column-gap: 30px;
  padding: 0px 40px;
`;

export const Content = styled.div`
  font-size: 21px;
  line-height: 37px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const DeveloperList = styled.div`
  width: 290px;
  height: 127px;
  display: grid;
  place-items: start center;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 40px;
`;

export const Developer = styled.div`
  display: inline-flex;
  font-size: 20px;
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

export const Period = styled.div`
  position: absolute;
  bottom: 0;
  right: 75px;
`;
