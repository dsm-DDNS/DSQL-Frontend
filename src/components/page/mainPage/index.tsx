import * as S from "./styles";
import bannerImage from "../../../asset/img/banner.png";
import School from "./school";
import SchoolPaper from "./schoolPaper";

export default function MainPage() {
  return (
    <S.MainDiv>
      <S.Banner>
        <img src={bannerImage} alt="banner" />
      </S.Banner>
      <School />
      <S.ExplainContainer>
        <S.Explain style={{ justifyContent: "flex-start" }}>
          DaeDeck NewS
        </S.Explain>
        <S.Explain style={{ justifyContent: "flex-end" }}>
          DDNS Serve information Quickest with Liability
        </S.Explain>
        <S.Explain style={{ justifyContent: "flex-start", marginTop: "146px" }}>
          DaeDeck NewS
        </S.Explain>
      </S.ExplainContainer>
      <SchoolPaper />
      <S.ExplainContainer>
        <S.Explain
          style={{ justifyContent: "flex-start", marginBottom: "146px" }}
        >
          DDNS Serve information Quickest with Liability
        </S.Explain>
        <S.Explain style={{ justifyContent: "flex-end" }}>
          DaeDeck NewS
        </S.Explain>
      </S.ExplainContainer>
    </S.MainDiv>
  );
}
