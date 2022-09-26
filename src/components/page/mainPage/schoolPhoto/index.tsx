import { Link } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";
import { BASE_URL } from "../../../../lib/export/data";
import { useEffect, useState } from "react";
import PhotoModal from "../../../common/photoModal";

export default function SchoolPhoto() {
  const [content, setContent] = useState<string>("");
  const [data, setData] = useState([]);
  const [modal, setModal] = useState<string>("");

  const mouseEvent = (e: any, str: string) => {
    if (str === "enter") {
      e.target.classList.add("increase");
    } else if (str === "leave") {
      e.target.classList.remove("increase");
    }
  };

  useEffect(() => {
    const getPhoto = () => {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/post/list",
        params: {
          size: 6,
        },
      }).then((res) => {
        setData(res.data.shortPostList);
        setContent(res.data.shortPostList[1].shortContent);
        // setPhoto(res.data.shortPostList.map((it: any) => it.imgList[0]));
      });
    };
    getPhoto();
  }, [setContent, setData]);

  const photoClick = (i: number) => {
    if (data) {
      setModal(data[i]);
    }
  };

  const onDelete = () => {
    setModal("");
  };

  return (
    <>
      {modal ? <PhotoModal item={modal} func={onDelete} /> : <></>}
      <S.School id="photo">
        <S.SchoolTitle>
          <S.SchoolName>DaeDeokSoftwareMeisterHighSchool</S.SchoolName>
          <S.SchoolMainTitle>
            <S.SchoolSubTitle size={70}>Press release</S.SchoolSubTitle>
            <S.SchoolSubTitle size={30}>and</S.SchoolSubTitle>
            <S.SchoolSubTitle size={70}>Photo album</S.SchoolSubTitle>
          </S.SchoolMainTitle>
          <hr />
        </S.SchoolTitle>
        <S.SchoolView>
          <S.SchoolButton>
            <Link to={"/photo"}>View All</Link>
          </S.SchoolButton>
          <S.SchoolExplain>{content}</S.SchoolExplain>
          <S.SchoolGrid>
            {data.map((item: any, i: number) => (
              <>
                <img
                  src={item.imgList[0]}
                  alt="이미지를 불러올 수 없었습니다."
                  className={`img${i}`}
                  onMouseEnter={(e) => mouseEvent(e, "enter")}
                  onMouseLeave={(e) => mouseEvent(e, "leave")}
                  onClick={() => photoClick(i)}
                />
              </>
            ))}
          </S.SchoolGrid>
        </S.SchoolView>
      </S.School>
    </>
  );
}
