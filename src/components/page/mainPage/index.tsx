import * as S from "./styles";
import SchoolPhoto from "./schoolPhoto";
import SchoolPaper from "./schoolPaper";
import Projects from "./project";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../lib/export/data";
import { useEffect, useState } from "react";

export default function MainPage() {
  const developerName: string[] = ["이동현", "안진우", "남요셉", "김순호"];
  const pos = [0, 70, 0, 70];
  const [project, setProject] = useState([]);

  // useEffect(() => {
  //   const getProject = () => {
  //     axios({
  //       method: "GET",
  //       url: BASE_URL + "/api/dsql/v1/project/full/list",
  //       params: {
  //         idx: 0,
  //         size: 4,
  //       },
  //     }).then((res) => {
  //       setProject(res.data.projectList);
  //     });
  //   };
  //   getProject();
  // }, []);

  return (
    <>
      <S.MainDiv>
        <S.Banner />
        <SchoolPhoto />
        <S.ExplainContainer>
          <div
            style={{
              marginTop: "146px",
              scrollSnapAlign: "start",
            }}
          >
            ㅤ
          </div>
          <S.Explain
            style={{
              justifyContent: "flex-start",
              marginTop: "86px",
            }}
          >
            DaeDeck NewS
          </S.Explain>
          {/* <S.Explain style={{ justifyContent: "flex-end" }}>
            DDNS Serve information Quickest with Liability
          </S.Explain>
          <S.Explain
            style={{ justifyContent: "flex-start", marginTop: "146px" }}
          >
            DaeDeck NewS
          </S.Explain> */}
        </S.ExplainContainer>
        {/* <SchoolPaper /> */}
        <S.ExplainContainer>
          <S.Explain
            style={{ justifyContent: "flex-start", marginBottom: "146px" }}
          >
            DDNS Serve information Quickest with Liability
          </S.Explain>
          <div
            style={{
              marginTop: "146px",
              scrollSnapAlign: "start",
            }}
          >
            ㅤ
          </div>
          <S.Explain style={{ justifyContent: "flex-end", marginTop: "86px" }}>
            DaeDeck ProjectList
          </S.Explain>
        </S.ExplainContainer>
        {/* <S.ProjectList>
          {project.map((item: any, i: number) => (
            <S.Project marginNumber={pos[i]}>
              <Projects
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
        </S.ProjectList> */}
        <S.ExplainContainer>
          <S.Explain
            style={{
              justifyContent: "flex-start",
              marginTop: "114px",
              scrollSnapAlign: "start",
            }}
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
