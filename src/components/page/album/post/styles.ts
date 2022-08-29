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
  color: #fff;
  font-size: 23px;
  background-color: #909090;
  padding-left: 10px;
  box-sizing: border-box;
  font-family: "Gowun Batang", serif;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const P = styled.p`
  width: 358px;
  height: 170px;
  overflow: hidden;
  overflow: scroll;
  overflow-x: hidden;
  color: #c9c9c9;
  font-family: "Gowun Batang", serif;
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
