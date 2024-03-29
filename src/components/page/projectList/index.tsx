import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../lib/export/data";
import Project from "./project";
import * as S from "./styles";

export default function ProjectList() {
  const [project, setProject] = useState([]);
  const [scrolled, setScrolled] = useState<boolean>(true);
  const [cnt, setCnt] = useState<number>(0);

  useEffect(() => {
    const getProject = () => {
      axios({
        method: "GET",
        url: BASE_URL + "/api/dsql/v1/project/full/list",
        params: {
          idx: cnt,
          size: 4,
        },
      }).then((res) => {
        setProject((list) => list.concat(res.data.projectList));
        setCnt(cnt + 1);
        setScrolled(false);
      });
    };

    if (scrolled) {
      getProject();
    }
  }, [scrolled, setScrolled]);

  if (document) {
    document.getElementById("list")?.addEventListener("scroll", (e) => {
      const maxHeight = document.getElementById("list")?.scrollHeight;
      if (maxHeight) {
        if (maxHeight - 750 === document.getElementById("list")?.scrollTop) {
          setScrolled(true);
        }
      }
    });
  }
  console.log(project)

  return (
    <>
      <S.SubDiv>
        <S.Title size={70}>Project List</S.Title>
        <hr />
      </S.SubDiv>
      <S.List id="list">
        {project.map((item: any) => (
          <>
            <Project
              devList={item.devList}
              content={item.introduction}
              logo={item.logo}
              image={item.imgList}
              startDate={item.startDate}
              endDate={item.endDate}
              title={item.title}
            />
          </>
        ))}
      </S.List>
    </>
  );
}
