import * as S from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { title } from "process";

export default function PhotoModal(props: any) {
  const { title, shortContent, imgList } = props.item;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const StyledSlider = styled(Slider)`
    margin: 0 30px;
    .slick-list {
      width: 716px;
      height: 420px;
      margin: 0 10px;
    }
    img {
      width: 716px;
      height: 420px;
      object-fit: cover;
    }

    .slick-dots li button:before {
      width: 6px;
      height: 6px;
      color: #c9c9c9;
    }
  `;

  return (
    <>
      <S.MainDiv>
        <S.DeleteBtn onClick={() => props.func()}>⨉</S.DeleteBtn>
        <S.Container>
          <StyledSlider {...settings}>
            {imgList.map((item: string) => (
              <>
                <img src={item} alt="" />
              </>
            ))}
          </StyledSlider>
          <div>
            <S.Title>{title}</S.Title>
            <br />
            <div>{shortContent}</div>
          </div>
        </S.Container>
      </S.MainDiv>
    </>
  );
}
