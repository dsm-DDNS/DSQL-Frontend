import * as S from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useState } from "react";

export default function ProjectModal(props: any) {
  const { image, introduction, startDate, endDate, devList, logo, title } =
    props.item;
  const [currentDevSlide, setCurrentDevSlide] = useState<number>(0);
  const [showDev, setShowDev] = useState(devList.slice(0, 6));

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

  const pagination = () => {
    const result = [<span>ㅤ</span>];
    const len = parseInt(`${devList.length / 6 + 1}`);

    if (len - 1) {
      result.pop();
      for (let i = 0; i < len; i++) {
        result.push(
          i === currentDevSlide ? (
            <span style={{ color: "#fff" }} onClick={() => showPage(i)}>
              •
            </span>
          ) : (
            <span onClick={() => showPage(i)}>•</span>
          )
        );
      }
    }

    return result;
  };

  const showPage = (i: number) => {
    setCurrentDevSlide(i);
    setShowDev(devList.slice(6 * i, 6 * (i + 1)));
  };

  return (
    <>
      <S.MainDiv>
        <S.DeleteBtn onClick={() => props.func()}>⨉</S.DeleteBtn>{" "}
        <S.Container>
          <StyledSlider>
            {image ? (
              <>
                {image.map((item: any) => (
                  <>
                    <img src={image[0] ? image[0].url : ""} alt="" />
                  </>
                ))}
              </>
            ) : (
              <img src="" alt="" />
            )}
          </StyledSlider>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Description>{introduction}</S.Description>
            <S.ShowDev>
              <S.DeveloperList>
                {showDev.map((item: any) => (
                  <S.Developer>
                    {item.studentId ? item.studentId : ""}{" "}
                    {item.name ? item.name : ""}
                  </S.Developer>
                ))}
              </S.DeveloperList>
              <S.Pagination>{pagination()}</S.Pagination>
              <div>
                {startDate} {endDate}
              </div>
            </S.ShowDev>
          </S.Content>
        </S.Container>
      </S.MainDiv>
    </>
  );
}
