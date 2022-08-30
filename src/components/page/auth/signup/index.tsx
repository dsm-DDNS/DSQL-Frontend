import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../../../lib/export/data";
import * as S from "./styles";

export default function SignUp() {
  const [data, setData] = useState({
    email: "",
    emailCheckCode: "",
    pw: "",
    name: "",
    introduction: "",
    userType: "",
  });

  const dataInput = (e: any, props: string) => {
    setData({ ...data, [props]: e.target.value });

    return;
  };

  const name: string[][] = [
    ["EMAIL", "email"],
    ["CODE", "emailCheckCode"],
    ["PASSWORD", "pw"],
    ["NAME", "name"],
    ["INTRODUCE", "introduction"],
  ];

  async function authentication() {
    await axios({
      method: "POST",
      url: BASE_URL + "/api/dsql/v1/auth/email",
      params: { email: data.email },
    });

    return;
  }

  async function signUp() {
    await axios({
      method: "POST",
      url: BASE_URL + "/api/dsql/v1/auth/signup",
      data: data,
    }).then((res) => {
      window.location.href = "/login";

      return;
    });

    return;
  }

  return (
    <>
      <S.SignUpDiv>
        <S.Title>SignUp</S.Title>
        {name.map((item) => (
          <>
            <S.SignUpInput>
              <input
                placeholder={item[0]}
                onChange={(e) => dataInput(e, item[1])}
              />
              {item[0] === "EMAIL" ? (
                <S.SendBtn
                  onClick={() => {
                    authentication();
                    return;
                  }}
                >
                  SEND
                </S.SendBtn>
              ) : (
                <></>
              )}
            </S.SignUpInput>
          </>
        ))}
        <S.SignupSelect name="TYPE" onChange={(e) => dataInput(e, "userType")}>
          <option value="none">TYPE</option>
          <option value="STUDENT">STUDENT</option>
          <option value="TEACHER">TEACHER</option>
        </S.SignupSelect>
        <S.SignUpBtn
          onClick={() => {
            signUp();
            return;
          }}
        >
          SignUp
        </S.SignUpBtn>
      </S.SignUpDiv>
    </>
  );
}
