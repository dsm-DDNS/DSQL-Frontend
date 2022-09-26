import { useState } from "react";
import ProjectModal from "../../../common/projectModal";
import * as S from "./styles";

export default function Project(props: any) {
  const { image, introduction, startDate, endDate, devList, logo } = props;
  const [modal, setModal] = useState("");
  // const [showDev, setShowDev] = useState();

  const showModal = () => {
    setModal(props);
  };

  const onDelete = () => {
    setModal("");
  };

  return (
    <>
      {modal ? <ProjectModal item={modal} func={onDelete} /> : <></>}
      <S.Project onClick={showModal}>
        <S.ClubName>
          <img src={logo ? logo : ""} alt="" />
        </S.ClubName>
        <S.ProjectContent>{introduction ? introduction : ""}</S.ProjectContent>
        <S.ProjectImage>
          {image[0] ? <img src={image[0].url} alt="" /> : <img src="" alt="" />}
        </S.ProjectImage>
        <S.ShowDev>
          <S.DeveloperList>
            {devList.slice(0, 6).map((item: any) => (
              <S.Developer>
                {item.studentId ? item.studentId : ""}{" "}
                {item.name ? item.name : ""}
              </S.Developer>
            ))}
          </S.DeveloperList>
        </S.ShowDev>
        <S.Period>
          {startDate ? startDate : ""} ~ {endDate ? endDate : " "}
        </S.Period>
      </S.Project>
    </>
  );
}
