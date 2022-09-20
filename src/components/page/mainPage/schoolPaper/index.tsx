import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { BASE_URL } from "../../../../lib/export/data";

export default function SchoolPaper() {
  const [content, setContent] = useState<String>("");
  const [newsList, setNewsList] = useState([]);
  const [showNews, setShowNews] = useState<Boolean>(false);

  async function getLastNews(n: number) {
    axios({
      method: "GET",
      url: BASE_URL + `/api/dsql/v1/news?newsId=${n}`,
    }).then((res) => {
      setContent(res.data.content);
      setShowNews(true);
    });
  }

  useEffect(() => {
    async function getNews() {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/news/list?idx=0&size=100",
      }).then((res) => {
        setNewsList(res.data.content);
      });
    }
    getNews();
  }, [setNewsList]);

  const newsClick = (n: number) => {
    getLastNews(newsList.length - n);
  };

  const hideNews = () => {
    setShowNews(false);
  };

  return (
    <S.SchoolPaper>
      <S.SchoolPaperTitle>
        <hr />
        <div>School Paper</div>
      </S.SchoolPaperTitle>
      <S.Content>
        {showNews ? (
          <>
            {/* <S.Slide
          onClick={() => onChangeImage(currentSlide - 1)}
          style={{ marginRight: "10px" }}
        >
          <div>‹</div>
        </S.Slide> */}
            <S.DeleteBtn onClick={hideNews}>⨉</S.DeleteBtn>
            <S.SchoolPaperContent>
              {/* {contents.map((content: string, i: number) => (
            <>{currentSlide === i ? <div>{content}</div> : <></>}</>
          ))} */}
              <div>{content}</div>
            </S.SchoolPaperContent>
            {/* <S.Slide
          onClick={() => onChangeImage(currentSlide + 1)}
          style={{ marginLeft: "10px" }}
        >
          <div>›</div>
        </S.Slide> */}
          </>
        ) : (
          <S.SchoolPaperContent>
            {newsList.map((item: any, i: number) => (
              <>
                <div onClick={() => newsClick(i)} style={{ cursor: "pointer" }}>
                  <div>{item.title}</div>
                  <hr />
                </div>
              </>
            ))}
          </S.SchoolPaperContent>
        )}
      </S.Content>
      <S.View>
        <Link to={"/paper"}>
          <a>View All</a>
        </Link>
      </S.View>
    </S.SchoolPaper>
  );
}
