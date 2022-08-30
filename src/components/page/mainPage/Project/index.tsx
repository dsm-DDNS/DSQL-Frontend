import { useState } from "react";
import * as S from "./styles";

export default function Project(props: any) {
  const { img, introduction, startDate, endDate, devList, logo } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentDevSlide, setCurrentDevSlide] = useState<number>(0);

  const [showDev, setShowDev] = useState(devList.slice(0, 6));

  const onChangeImage = (n: number) => {
    if (img.length <= n) n = 0;
    if (n < 0) n = img.length - 1;
    setCurrentSlide(n);

    return;
  };

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

    return;
  };

  return (
    <>
      <S.Project>
        <S.ClubName>
          <img src={logo ? logo : ""} alt="" />
        </S.ClubName>
        <S.ProjectContent>{introduction ? introduction : ""}</S.ProjectContent>
        <S.ProjectImage>
          <S.Slide
            onClick={() => {
              onChangeImage(currentSlide - 1);
              return;
            }}
            style={{ left: "-15px" }}
          >
            <div>‹</div>
          </S.Slide>
          {img.map((item: any, i: number) => (
            <>
              {currentSlide === i ? (
                <img src={item.url ? item.url : ""} alt="" />
              ) : (
                <></>
              )}
            </>
          ))}
          <S.Slide
            onClick={() => {
              onChangeImage(currentSlide + 1);
              return;
            }}
            style={{ right: "-15px" }}
          >
            <div>›</div>
          </S.Slide>
        </S.ProjectImage>
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
        </S.ShowDev>
        <S.Period>
          {startDate ? startDate : ""} ~ {endDate ? endDate : " "}
        </S.Period>
      </S.Project>
    </>
  );
}
