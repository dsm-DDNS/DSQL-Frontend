import * as S from "./styles";

export default function SideBar() {
  const section: string[] = ["banner", "photo", "news", "project", "develop"];
  return (
    <>
      <S.MainDiv>
        {section.map((str: string, i: number) => (
          <>
            <S.Nav href={`#${str}`}>
              <S.Section>
                <div>{i + 1}</div>
                <hr />
              </S.Section>
            </S.Nav>
          </>
        ))}
      </S.MainDiv>
    </>
  );
}
