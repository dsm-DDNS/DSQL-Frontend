import axios from "axios";
import FormData from "form-data";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../lib/export/data";
import * as S from "./styles";
import Swal from "sweetalert2";

export default function AdminPage() {
  const [newsData, setNewsData] = useState({
    shortContent: "..",
    content: "",
    title: "",
  });

  const [projectData, setProjectData] = useState({
    title: "",
    introduction: "",
    startDate: "",
    endDate: "",
    devList: [
      {
        name: "",
        studentId: "",
        email: "",
        urlInfo: {
          title: "",
          url: "",
        },
      },
    ],
    urlInfo: [
      {
        title: "",
        url: "",
      },
    ],
  });

  const [devData, setDevData] = useState({
    name: "",
    studentId: "",
    email: "",
    urlInfo: {
      title: "",
      url: "",
    },
  });

  const [urlInfo, setUrlInfo] = useState({
    title: "",
    url: "",
  });

  const [data, setData] = useState([devData]);
  const [data2, setData2] = useState([urlInfo]);

  const newsPost = () => {
    axios({
      method: "POST",
      url: BASE_URL + "/api/dsql/v1/news",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      },
      data: newsData,
    })
      .then(() => {
        Swal.fire({
          title: "교지가 업로드되었습니다.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((res) => {
          if (res.isConfirmed) {
            setNewsData({
              title: "",
              shortContent: "..",
              content: "",
            });
          }
        });
      })
      .catch(() => {
        Swal.fire({
          title: "제목과 내용을 정확히 \n 기재해주세요.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });

    return;
  };

  const newsInputChange = (props: string) => (e: any) => {
    setNewsData({ ...newsData, [props]: e.target.value });

    return;
  };

  const projectInputChange = (props: string) => (e: any) => {
    setProjectData({ ...projectData, [props]: e.target.value });

    return;
  };

  const [number, setNumber] = useState(0);

  const devInputChange = (props: string, i: number) => (e: any) => {
    setDevData({ ...devData, [props]: e.target.value });
    setNumber(i);

    return;
  };

  function urlInputChange(props: string, e: any, i: number) {
    setUrlInfo({ ...urlInfo, [props]: e.target.value });
    setNumber(i);

    return;
  }

  async function projectPost() {
    console.log(projectData);
    if (showImage[0] !== "" && logoShowImage[0] !== "") {
      axios({
        method: "POST",
        url: BASE_URL + "/api/dsql/v1/project",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        data: projectData,
      })
        .then((res) => {
          axios({
            method: "PUT",
            url: BASE_URL + "/api/dsql/v1/project/img",
            params: {
              projectId: res.data.projectId,
            },
            headers: {
              accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
            },
            data: formData,
          }).then(() => {
            axios({
              method: "PUT",
              url: BASE_URL + "/api/dsql/v1/project/logo",
              params: {
                projectId: res.data.projectId,
              },
              headers: {
                accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${sessionStorage.getItem(
                  "accessToken"
                )}`,
              },
              data: logoFormData,
            }).then(() => {
              Swal.fire({
                title: "프로젝트가 업로드되었습니다.",
                icon: "success",
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.reload();
                }
              });
            });
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            title: "내용을 정확히 기재해주세요.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } else {
      Swal.fire({
        title: "이미지와 로고를 선택해주세요.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }

    return;
  }

  const addDev = () => {
    setData([
      ...data,
      {
        name: "",
        studentId: "",
        email: "",
        urlInfo: {
          title: "",
          url: "",
        },
      },
    ]);

    setData2([
      ...data2,
      {
        title: "",
        url: "",
      },
    ]);
    return;
  };

  useEffect(() => {
    setData(
      data.map((item: any, idx: number) => (idx === number ? devData : item))
    );
    return;
  }, [devData]);

  useEffect(() => {
    setProjectData({
      ...projectData,
      devList: data,
    });
    return;
  }, [data]);

  useEffect(() => {
    setProjectData({
      ...projectData,
      urlInfo: data2,
    });
    return;
  }, [data2]);

  useEffect(() => {
    setData2(
      data2.map((item: any, idx: number) => (idx === number ? urlInfo : item))
    );
    return;
  }, [urlInfo]);

  const [formData, setFormData] = useState(new FormData());
  const [showImage, setShowImage] = useState<any>([""]);
  const [logoFormData, setLogoFormData] = useState(new FormData());
  const [logoShowImage, setLogoShowImage] = useState<any>([""]);

  const imgSelect = async (
    props: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    if (e.target.files) {
      const formData = new FormData();
      let arr = [];
      for (let i = 0; i < e.target.files.length; i++) {
        if (props === "image") formData.append("image", e.target.files[i]);
        else if (props === "logo") formData.append("logo", e.target.files[i]);

        arr.push(e.target.files[i]);
      }

      if (props === "image") {
        setShowImage(arr);
        setFormData(formData);
      } else if (props === "logo") {
        setLogoShowImage(arr);
        setLogoFormData(formData);
      }
    }
    return;
  };

  return (
    <>
      <S.Post
        style={{
          marginTop: "0px",
        }}
      >
        <S.SubDiv>
          <S.Title size={70}>School Paper</S.Title>
          <hr />
        </S.SubDiv>
        <S.Bundle
          style={{
            top: "0px",
            right: "100px",
          }}
        >
          <S.InputPost>
            <span>Title</span>
            <input
              value={newsData.title}
              placeholder="제목을 입력해주세요."
              onChange={newsInputChange("title")}
            />
          </S.InputPost>
          <S.InputPost>
            <span>Content</span>
            <textarea
              style={{
                height: "616px",
              }}
              value={newsData.content}
              placeholder="내용을 입력해주세요."
              onChange={newsInputChange("content")}
            />
          </S.InputPost>
          <S.ButtonPost onClick={() => newsPost()}>Upload</S.ButtonPost>
        </S.Bundle>
      </S.Post>
      <S.Post>
        <S.SubDiv
          style={{
            left: "50px",
          }}
        >
          <S.Title size={70}>Project</S.Title>
          <hr />
        </S.SubDiv>
        <S.Bundle
          style={{
            left: "300px",
          }}
        >
          <S.InputPost>
            <span>Title</span>
            <input
              value={projectData.title}
              placeholder="제목을 입력해주세요."
              onChange={projectInputChange("title")}
            />
          </S.InputPost>
          <S.InputPost>
            <span>Introduction</span>
            <textarea
              style={{
                marginBottom: "40px",
                height: "154px",
              }}
              value={projectData.introduction}
              placeholder="소개말을 입력해주세요."
              onChange={projectInputChange("introduction")}
            />
          </S.InputPost>
          {data.map((item, i: number) => (
            <S.InputPost
              style={{
                marginTop: "20px",
              }}
            >
              {i === 0 ? <span>StudentNumber/Name</span> : <></>}
              <input
                style={{
                  width: "100px",
                  padding: "23px",
                }}
                placeholder="학번"
                onChange={devInputChange("studentId", i)}
              />
              <input
                style={{
                  width: "120px",
                  padding: "23px",
                }}
                placeholder="이   름"
                onChange={devInputChange("name", i)}
              />
              <input
                style={{
                  width: "120px",
                  padding: "23px",
                }}
                placeholder="github"
                onChange={(e) => urlInputChange("title", e, i)}
              />
              <input
                style={{
                  width: "180px",
                  padding: "23px",
                }}
                placeholder="github/id"
                onChange={(e) => urlInputChange("url", e, i)}
              />
              <input
                style={{
                  width: "140px",
                  padding: "23px",
                }}
                placeholder="email"
                onChange={devInputChange("email", i)}
              />
            </S.InputPost>
          ))}
          <S.AddButton
            src="https://cdn.discordapp.com/attachments/857970124219613184/1011524666202017813/unknown.png"
            alt=""
            onClick={() => addDev()}
          />
          <S.InputPost>
            <span>Develop Period</span>
            <input
              style={{
                width: "345px",
                paddingLeft: "105px",
              }}
              type="date"
              value={projectData.startDate}
              onChange={projectInputChange("startDate")}
            />
            <input
              style={{
                width: "345px",
                paddingLeft: "105px",
              }}
              type="date"
              value={projectData.endDate}
              onChange={projectInputChange("endDate")}
            />
          </S.InputPost>
        </S.Bundle>

        <S.Bundle
          style={{
            right: "100px",
          }}
        >
          <S.InputPost>
            <span>Post</span>
            {showImage[0] !== "" ? (
              <>
                {showImage.map((item: any) => (
                  <div>{item.name}</div>
                ))}
              </>
            ) : (
              <div>프로젝트 사진들을 선택해주세요.</div>
            )}

            <S.Select>파일 선택</S.Select>
            <S.flieInput
              type="file"
              multiple
              accept="image/png, image/jpeg"
              onChange={(e) => imgSelect("image", e)}
            />
          </S.InputPost>
          <S.InputPost style={{ marginTop: "0px" }}>
            <span>Logo</span>
            {logoShowImage[0] !== "" ? (
              <>
                {logoShowImage.map((item: any) => (
                  <div>{item.name}</div>
                ))}
              </>
            ) : (
              <div>로고 이미지를 선택해주세요.</div>
            )}
            <S.Select>파일 선택</S.Select>
            <S.flieInput
              accept="image/png, image/jpeg"
              type="file"
              onChange={(e) => imgSelect("logo", e)}
            />
          </S.InputPost>
          <S.ButtonPost onClick={() => projectPost()}>Upload</S.ButtonPost>
        </S.Bundle>
      </S.Post>
    </>
  );
}
