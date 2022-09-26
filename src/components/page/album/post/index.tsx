import * as S from "./styles";

interface propsType {
  title?: string;
  content?: string;
  imgURL?: string;
}

export default function Post(props: propsType) {
  const { title, content, imgURL } = props;
  return (
    <>
      <S.PostImage>
        <img src={imgURL ? imgURL : ""} alt="" />
        <S.imageTitle>{title ? title : "제목이 없습니다.."}</S.imageTitle>
      </S.PostImage>
      <S.P>{content ? content : "내용이 없습니다.."}</S.P>
    </>
  );
}
