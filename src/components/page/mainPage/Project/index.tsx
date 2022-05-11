import * as S from "./styles";

export default function Project({ color }: any) {
  return (
    <>
      <S.Project color={color}>
        <S.ProjectContent>
          약 5년 간 서비스를 제공해온 노하우를 바탕으로 EntryDSM은 지속적인
          성장을 이뤄내고 있습니다.
        </S.ProjectContent>
        <S.ProjectImage>
          <img src="" alt="" />
        </S.ProjectImage>
        <S.ClubName>
          <img src="" alt="" />
        </S.ClubName>
      </S.Project>
    </>
  );
}
