import * as S from "./styles";

export default function PhotoModal(props: any) {

  return (
    <>
      <S.MainDiv>
        <S.DeleteBtn onClick={() => props.func()}>⨉</S.DeleteBtn>
        <S.Container>
          <img src="" alt="" />
          <div>
            <S.Title>{props.item.title}</S.Title>
            <br />
            <div>{props.item.shortContent}</div>
          </div>
        </S.Container>
      </S.MainDiv>
    </>
  );
}
