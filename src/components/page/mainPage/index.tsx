import * as S from "./styles";
import bannerImage from "../../../asset/img/banner.png";
import SchoolPhoto from "./schoolPhoto";
import SchoolPaper from "./schoolPaper";
import Project from "./Project";

export default function MainPage() {
  const developerName = ["김순호", "안진우", "남요셉", "이동현"];

  return (
    <>
      <S.MainDiv>
        <S.Banner>
          <img src={bannerImage} alt="banner" />
        </S.Banner>
        <SchoolPhoto />
        <S.ExplainContainer>
          <S.Explain style={{ justifyContent: "flex-start" }}>
            DaeDeck NewS
          </S.Explain>
          <S.Explain style={{ justifyContent: "flex-end" }}>
            DDNS Serve information Quickest with Liability
          </S.Explain>
          <S.Explain
            style={{ justifyContent: "flex-start", marginTop: "146px" }}
          >
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
        <S.ProjectList>
          <div>
            <Project color="#483B52" />
          </div>
          <div style={{ marginTop: "160px" }}>
            <Project color="#310057" />
          </div>
          <div>
            <Project color="#C59393" />
          </div>
          <div style={{ marginTop: "160px" }}>
            <Project color="#006360" />
          </div>
        </S.ProjectList>
        <S.ExplainContainer>
          <S.Explain
            style={{ justifyContent: "flex-start", marginTop: "114px" }}
          >
            DaedeokSoftwareMeisterHighSchool
          </S.Explain>
          <S.Explain
            style={{ justifyContent: "flex-start", marginTop: "78px" }}
          >
            Developers
          </S.Explain>
        </S.ExplainContainer>
        <S.Footer>
          {developerName.map((name) => (
            <S.Developer>
              <hr />
              <div>{name}</div>
            </S.Developer>
          ))}
        </S.Footer>
      </S.MainDiv>
    </>
  );
}
