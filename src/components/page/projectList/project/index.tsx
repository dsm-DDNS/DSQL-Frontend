import { useState } from "react";
import * as S from "./styles";

export default function Project(props: any) {
  const { devList, content, logo, image, startDate, endDate } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showDev, setShowDev] = useState(devList.slice(0, 6));

  const pagination = () => {
    const result = [<span>ㅤ</span>];
    const len = parseInt(`${devList.length / 6 + 1}`);

    if (len - 1) {
      result.pop();
      for (let i = 0; i < len; i++) {
        result.push(
          i === currentSlide ? (
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
    console.log(i);
    setCurrentSlide(i);
    setShowDev(devList.slice(6 * i, 6 * (i + 1)));
  };

  return (
    <>
      <S.Project>
        <S.Logo>
          <img src={logo ? logo.url : ""} alt="" />
        </S.Logo>
        <S.GridDiv>
          <S.PageImage>
            <img src={image ? image.url : ""} alt="" />
          </S.PageImage>
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
          <S.Content>{content ? content : ""}</S.Content>
          <S.Period>
            {startDate ? startDate : ""} ~ {endDate ? endDate : " "}
          </S.Period>
        </S.GridDiv>
      </S.Project>
    </>
  );
}
