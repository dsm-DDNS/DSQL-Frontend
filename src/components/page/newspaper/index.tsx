import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../lib/export/data";
import * as S from "./styles";

export default function NewsPaper() {
  const [contents, setContents] = useState([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const onChangeImage = (n: number) => {
    if (contents.length <= n) n = contents.length - 1;
    if (n < 0) n = 0;
    setCurrentSlide(n);
  };

  useEffect(() => {
    const getNews = () => {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/news/list",
        params: {
          idx: 0,
          size: 12,
        },
      }).then((res) => {
        setContents(res.data.content);
      });
    };
    getNews();
  }, [setContents]);

  return (
    <S.MainDiv>
      <S.SubDiv>
        <S.Title size={70}>School Paper</S.Title>
        <hr />
      </S.SubDiv>

      <S.ExplainContainer>
        <S.Explain style={{ right: "50px" }}>DaeDeok News</S.Explain>
      </S.ExplainContainer>

      <S.Content>
        {currentSlide !== contents.length - 1 ? (
          <S.Slide
            onClick={() => onChangeImage(currentSlide + 1)}
            style={{
              marginRight: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <div>‹</div>
          </S.Slide>
        ) : (
          <S.Slide
            onClick={() => onChangeImage(currentSlide + 1)}
            style={{
              marginRight: "10px",
            }}
          />
        )}
        <S.SchoolPaperContent>
          {contents.map((content: any, i: number) => (
            <>{currentSlide === i ? <div>{content.content}</div> : <></>}</>
          ))}
        </S.SchoolPaperContent>
        {currentSlide !== 0 ? (
          <S.Slide
            onClick={() => onChangeImage(currentSlide - 1)}
            style={{
              marginLeft: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <div>›</div>
          </S.Slide>
        ) : (
          <S.Slide
            onClick={() => onChangeImage(currentSlide - 1)}
            style={{ marginLeft: "10px" }}
          />
        )}
      </S.Content>
    </S.MainDiv>
  );
}
