import Post from "./post";
import { MainDiv } from "../mainPage/styles";
import * as S from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../lib/export/data";
import PhotoModal from "../../common/photoModal";

interface dataType {
  title?: string;
  shortContent?: string;
  imgList: string[];
}

export default function PhotoAlbum() {
  const [photo, setPhoto] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    const getPhoto = () => {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/post/list",
        params: {
          size: 16,
        },
      }).then((res) => {
        setPhoto(res.data.shortPostList);
      });
    };
    getPhoto();
  }, [photo]);

  const showModal = (n: number) => {
    setModal(photo[n]);
  };

  const onDelete = () => {
    setModal("");
  };

  return (
    <>
      {modal ? <PhotoModal item={modal} func={onDelete} /> : <></>}
      <S.MainDiv>
        <S.SubDiv>
          <S.Title size={70}>Press release</S.Title>
          <S.Title size={30} style={{ marginLeft: "160px" }}>
            and
          </S.Title>
          <S.Title size={70}>Photo album</S.Title>
          <hr />
        </S.SubDiv>
        <S.PostContainer>
          <S.PostDiv>
            {photo.map((item: dataType, i: number) => (
              <div onClick={() => showModal(i)}>
                <Post
                  title={item.title}
                  content={item.shortContent}
                  imgURL={item.imgList[0]}
                />
              </div>
            ))}
          </S.PostDiv>
        </S.PostContainer>
        <S.ExplainContainer>
          <S.Explain style={{ justifyContent: "flex-start" }}>
            DaeDeck NewS
          </S.Explain>
        </S.ExplainContainer>
      </S.MainDiv>
    </>
  );
}
