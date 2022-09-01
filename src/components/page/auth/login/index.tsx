import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../../../lib/export/data";
import * as S from "./styles";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    pw: "",
  });

  const dataInput = (e: any, props: string) => {
    setData({ ...data, [props]: e.target.value });
  };

  async function login() {
    await axios({
      method: "POST",
      url: BASE_URL + "/api/dsql/v1/auth/login",
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }).then((res) => {
      const { accessToken, refreshToken } = res.data;

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      sessionStorage.setItem("accessToken", accessToken);

      window.location.href = "/";
    });
  }

  return (
    <>
      <S.LoginDiv>
        <S.Title>LOGIN</S.Title>
        <S.LoginInput>
          <input placeholder="EMAIL" onChange={(e) => dataInput(e, "email")} />
        </S.LoginInput>
        <S.LoginInput>
          <input
            placeholder="PASSWORD"
            type={"password"}
            onChange={(e) => dataInput(e, "pw")}
          />
        </S.LoginInput>
        <S.LoginBtn onClick={() => login()}>LOGIN</S.LoginBtn>
      </S.LoginDiv>
    </>
  );
}
