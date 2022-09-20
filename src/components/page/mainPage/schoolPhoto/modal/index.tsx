import * as S from "./styles";

export default function PhotoModal(props: any) {
  const onDelete = () => {
    props.func();
  };

  return (
    <>
      <S.MainDiv>
        <S.DeleteBtn onClick={() => onDelete()}>⨉</S.DeleteBtn>
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
