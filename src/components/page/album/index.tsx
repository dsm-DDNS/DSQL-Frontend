import Post from "./post";
import { MainDiv } from "../mainPage/styles";
import * as S from "./styles";

export default function PhotoAlbum() {
  const postData = [
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
    "워크제작발표회",
  ];
  return (
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
          {postData.map(() => (
            <>
              <Post />
            </>
          ))}
        </S.PostDiv>
      </S.PostContainer>
      <S.ExplainContainer>
        <S.Explain style={{ justifyContent: "flex-start" }}>
          DaeDeck NewS
        </S.Explain>
      </S.ExplainContainer>
    </S.MainDiv>
  );
}
