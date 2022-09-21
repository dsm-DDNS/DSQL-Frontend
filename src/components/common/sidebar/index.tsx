import { useRef } from "react";
import * as S from "./styles";

export default function SideBar() {
  const section: string[] = ["banner", "photo", "news", "project", "develop"];

  const compare = (n: number) => {
    if (
      680 * (n - 1) + 100 * (n - 2) <= window.pageYOffset &&
      window.pageYOffset < 680 * n + 100 * (n - 1)
    ) {
      const hr: any = document.getElementById(`hr${n - 1}`);
      style(hr, "normal", "#a582c2", 0);
    } else {
      const hr: any = document.getElementById(`hr${n - 1}`);
      style(hr, "difference", "#242424", 100);
    }
  };

  const style = (hr: any, str: string, color: string, num: number) => {
    hr.style.mixBlendMode = str;
    hr.children[0].children[0].children[0].style.color = color;
    hr.children[0].children[0].children[0].style.filter = `invert(${num}%)`;
    hr.children[0].children[0].children[1].style.backgroundColor = color;
    hr.children[0].children[0].children[1].style.filter = `invert(${num}%)`;
  };

  document.addEventListener("scroll", (e) => {
    console.log(window.pageYOffset, window.innerHeight);
    for (let i = 1; i < section.length + 1; i++) compare(i);
  });

  return (
    <>
      {section.map((str: string, i: number) => (
        <S.MainDiv style={{ top: `${15 + i * 17}%` }} id={`hr${i}`}>
          <S.Nav href={`#${str}`}>
            <S.Section>
              <div>{i + 1}</div>
              <hr />
            </S.Section>
          </S.Nav>
        </S.MainDiv>
      ))}
    </>
  );
}
