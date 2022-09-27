import * as S from "./styles";
import SchoolPhoto from "./schoolPhoto";
import Project from "./projects";
import SchoolPaper from "./schoolPaper";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../lib/export/data";
import { useEffect, useRef, useState } from "react";
import SideBar from "../../common/sidebar";

export default function MainPage() {
  const developerName: string[] = ["이동현", "안진우", "남요셉", "김순호"];
  const pos = [0, 70, 0, 70];
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
        console.log(res.data.projectList);
        setProject(res.data.projectList);
      });
    };
    getProject();
  }, [setProject]);

  return (
    <>
      <SideBar />
      {/* <S.MainDiv> */}
      <S.Background>
        <S.Banner id="banner">
          <div>
            <p>
              <S.Title>DSQL</S.Title>
              <br />
              <S.Description>
                DDNS Serve information Quickest with Liability
              </S.Description>
            </p>
          </div>
        </S.Banner>
      </S.Background>
      <SchoolPhoto />
      <S.ExplainContainer>
        <div
          style={{
            scrollSnapAlign: "start",
          }}
          id="news"
        >
          ㅤ
        </div>
        <S.Explain
          style={{
            justifyContent: "flex-start",
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
      <SchoolPaper />
      <S.ProjectContainer>
        <S.ExplainContainer>
          <S.Explain style={{ justifyContent: "flex-start" }}>
            DDNS Serve information Quickest with Liability
          </S.Explain>
          <div
            style={{
              scrollSnapAlign: "start",
            }}
            id="project"
          >
            ㅤ
          </div>
          <S.Explain style={{ justifyContent: "flex-end" }}>
            DaeDeck ProjectList
          </S.Explain>
        </S.ExplainContainer>
        <S.ProjectList>
          {project.map((item: any, i: number) => (
            <S.Project marginNumber={pos[i]}>
              <Project
                image={item.imgList}
                introduction={item.introduction}
                startDate={item.startDate}
                endDate={item.endDate}
                devList={item.devList}
                logo={item.logo.url}
                title={item.title}
              />
            </S.Project>
          ))}
          <S.View>
            <Link to={"/list"}>View All</Link>
          </S.View>
        </S.ProjectList>
      </S.ProjectContainer>
      <S.ExplainContainer>
        <S.Explain
          style={{
            justifyContent: "flex-start",
            marginTop: "114px",
            scrollSnapAlign: "start",
          }}
          id="develop"
        >
          <p>
            DSQL이란?<br/> 대덕소프트웨어마이스터고등학교 신문부에서 제작하였습니다.<br/>
            학교 신문부에서 제작하는 교지 내용을 업로드하고,<br/> 교내 산학협력부
            네이버 블로그에서 업로드한 게시물을 제공하여 교외에서 알지못하는
            다양한 정보를 제공하기 위해 노력합니다.
          </p>
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
      {/* </S.MainDiv> */}
    </>
  );
}
