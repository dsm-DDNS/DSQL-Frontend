import styled from "styled-components";

export const PostImage = styled.div`
position: relative;
  img {
    width: 358px;
    height: 210px;
  }
`;

export const imageTitle = styled.div`
  position: absolute;
  bottom: 0;
  width: 358px;
  height: 30px;
  background-color: #d2d2d2;
`;

export const P = styled.p`
  width: 358px;
  height: 170px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    background-color: #e3e3e3;
    border-radius: 5px;
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 3px;
    width: 3px;
  }
`;
