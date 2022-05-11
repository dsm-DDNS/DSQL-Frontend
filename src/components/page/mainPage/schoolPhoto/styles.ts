import styled from "styled-components";
export const School = styled.div`
  width: 100%;
  padding: 166px 100px 90px 126px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
`;

export const SchoolTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 300px;
  hr {
    margin-left: 0px;
    width: 200px;
    height: 10px;
    border: none;
    background-color: #a582c2;
    position: absolute;
    bottom: 0;
  }
`;

export const SchoolName = styled.div`
  color: #c9c9c9;
  font-size: 30px;
`;

export const SchoolMainTitle = styled.div`
  position: absolute;
  left: 0;
  top: 30px;
`;

export const SchoolSubTitle = styled.div<{ size?: number }>`
  font-size: ${(props) => props.size + "px"};
  color: #000;
  text-align: center;
`;

export const SchoolView = styled.div`
  position: relative;
`;

export const SchoolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  .img0 {
    grid-column: 3;
    grid-row: 1;
  }
  .img1 {
    grid-column: 1;
    grid-row: 2;
  }
  .img2 {
    grid-column: 2;
    grid-row: 2;
  }
  .img3 {
    grid-column: 3;
    grid-row: 2;
  }
  .img4 {
    grid-column: 2;
    grid-row: 3;
  }
  .img5 {
    grid-column: 3;
    grid-row: 3;
  }

  img {
    width: 358px;
    height: 210px;
    object-fit: cover;
  }
`;

export const SchoolButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-bottom: 10px;
  margin-right: 24px;
`;

export const SchoolExplain = styled.div`
  width: 575px;
  height: 167px;
  position: absolute;
  top: 37px;
  left: 0;
  font-size: 20px;
`;
