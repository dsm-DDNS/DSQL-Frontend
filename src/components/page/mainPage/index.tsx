import * as S from "./styles";
import bannerImage from "../../../asset/img/banner.png";
import SchoolPhoto from "./schoolPhoto";
import SchoolPaper from "./schoolPaper";
import Project from "./Project";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../lib/export/data";
import { useEffect, useState } from "react";

export default function MainPage() {
  const developerName: string[] = ["김순호", "안진우", "남요셉", "이동현"];
  const pos = [0, 160, 0, 160];
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getProject = () => {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/project/full/list",
        params: {
          idx: 0,
          size: 4,
        },
      }).then((res) => {
        setProject(res.data.projectList);

        return;
      });

      return;
    };
    getProject();

    return;
  }, []);

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
          {project.map((item: any, i: number) => (
            <S.Project marginNumber={pos[i]}>
              <Project
                img={item.imgList}
                introduction={item.introduction}
                startDate={item.startDate}
                endDate={item.endDate}
                devList={item.devList}
                logo={item.logo.url}
              />
            </S.Project>
          ))}
          <S.View>
            <Link to={"/list"}>View All</Link>
          </S.View>
        </S.ProjectList>
        <S.ExplainContainer>
          <S.Explain
            style={{ justifyContent: "flex-start", marginTop: "114px" }}
          >
            DaedeokSoftwareMeisterHighSchool
          </S.Explain>
          <S.Explain
            style={{
              justifyContent: "flex-start",
              marginTop: "78px",
              opacity: "1",
            }}
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
