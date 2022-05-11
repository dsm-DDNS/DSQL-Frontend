import { Link } from "react-router-dom";
import * as S from "./styles";

export default function SchoolPhoto() {
  const schoolGrid = ["", "", "", "", "", ""];

  return (
    <S.School>
      <S.SchoolTitle>
        <S.SchoolName>DaeDeokSoftwareMeisterHighSchool</S.SchoolName>
        <S.SchoolMainTitle>
          <S.SchoolSubTitle size={70}>Press release</S.SchoolSubTitle>
          <S.SchoolSubTitle size={30}>and</S.SchoolSubTitle>
          <S.SchoolSubTitle size={70}>Photo album</S.SchoolSubTitle>
        </S.SchoolMainTitle>
        <hr />
      </S.SchoolTitle>
      <S.SchoolView>
        <S.SchoolButton>
          <Link to={"/photo"}>View All</Link>
        </S.SchoolButton>
        <S.SchoolExplain>
          대전시교육청은 3일 대덕소프트웨어마이스터고등학교에서 '대전 학생 걷기
          앱(App) 제작발표회'를 개최했다.대전시교육청과
          대덕소프트웨어마이스터고, 대전체육교과연구회의 협업을 통해 전국 최초로
          개발된 이 앱은 대전 학생들이 직접 제작하고 학교 현장에서 활용한다는
          측면에서 그 의의가 매우 크다.
        </S.SchoolExplain>
        <S.SchoolGrid>
          {schoolGrid.map((item, i: number) => (
            <>
              <img src="" alt="" className={`img${i}`} />
            </>
          ))}
        </S.SchoolGrid>
      </S.SchoolView>
    </S.School>
  );
}
