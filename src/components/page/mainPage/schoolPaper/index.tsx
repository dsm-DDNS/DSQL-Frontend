import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { BASE_URL } from "../../../../lib/export/data";

export default function SchoolPaper() {
  const [content, setContent] = useState<String>("");

  useEffect(() => {
    async function getLastNews() {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/news/latest",
      })
        .then((res) => {
          setContent(res.data.content);
        })
        .catch((err) => {
          console.log(err);
        });

      return;
    }
    getLastNews();

    return;
  });

  return (
    <S.SchoolPaper>
      <S.SchoolPaperTitle>
        <hr />
        <div>School Paper</div>
      </S.SchoolPaperTitle>
      <S.Content>
        {/* <S.Slide
          onClick={() => onChangeImage(currentSlide - 1)}
          style={{ marginRight: "10px" }}
        >
          <div>‹</div>
        </S.Slide> */}
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
      </S.Content>
      <S.View>
        <Link to={"/paper"}>
          <a>View All</a>
        </Link>
      </S.View>
    </S.SchoolPaper>
  );
}
