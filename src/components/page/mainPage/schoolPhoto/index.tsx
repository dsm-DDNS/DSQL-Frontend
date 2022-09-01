import { Link } from "react-router-dom";
import * as S from "./styles";
import axios from "axios";
import { BASE_URL } from "../../../../lib/export/data";
import { useEffect, useState } from "react";

export default function SchoolPhoto() {
  const [photo, setPhoto] = useState<string[]>([
    "https://dsmhs.djsch.kr//upload/edit/20201127/IMG_085251.jpg",
    "https://dsmhs.djsch.kr/upload/edit/20220426/IMG_091418.jpeg",
    "https://dsmhs.djsch.kr/upload/edit/20211018/IMG_150309.jpg",
    "https://dsmhs.djsch.kr//upload/edit/20190926/IMG_193039.jpg",
    "https://dsmhs.djsch.kr/upload/edit/20220426/IMG_161514.jpg",
    "https://dsmhs.djsch.kr/upload/edit/20211020/IMG_141406.jpg",
  ]);
  const [content, setContent] = useState<string>("");

  // useEffect(() => {
  //   const getPhoto = () => {
  //     axios({
  //       method: "GET",
  //       url: BASE_URL + "/api/dsql/v1/post/list",
  //       params: {
  //         size: 6,
  //       },
  //     }).then((res) => {
  //       setContent(res.data.shortContent);
  //       setPhoto(res.data.shortPostList.map((it: any) => it.imgList[0]));
  //     });
  //   };
  //   getPhoto();
  // }, []);

  return (
    <S.School>
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
          {/* <Link to={"/photo"}>View All</Link> */}
        </S.SchoolButton>
        <S.SchoolExplain>{content}</S.SchoolExplain>
        <S.SchoolGrid>
          {photo.map((item, i: number) => (
            <>
              <img
                src={item}
                alt="이미지를 불러올 수 없었습니다."
                className={`img${i}`}
              />
            </>
          ))}
        </S.SchoolGrid>
      </S.SchoolView>
    </S.School>
  );
}
