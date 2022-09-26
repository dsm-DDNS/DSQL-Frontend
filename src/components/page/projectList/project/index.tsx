import { useState } from "react";
import ProjectModal from "../../../common/projectModal";
import * as S from "./styles";

export default function Project(props: any) {
  const { devList, content, logo, image, startDate, endDate } = props;

  const [modal, setModal] = useState("");

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
        <S.Logo>
          <img src={logo ? logo.url : ""} alt="" />
        </S.Logo>
        <S.GridDiv>
          <S.PageImage>
            <img src={image[0] ? image[0].url : ""} alt="" />
          </S.PageImage>
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
          <S.Content>{content ? content : ""}</S.Content>
          <S.Period>
            {startDate ? startDate : ""} ~ {endDate ? endDate : " "}
          </S.Period>
        </S.GridDiv>
      </S.Project>
    </>
  );
}
