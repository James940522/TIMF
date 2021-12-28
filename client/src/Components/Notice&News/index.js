import { useNavigate } from "react-router-dom";
import plusIcon from "../../assets/icon_plus.png";
import clockIcon from "../../assets/icon_clock.png";
import {
  NoticeContainer,
  SectionDiv,
  NoticePadding,
  SectionTitle,
  Section,
  NoticeContents,
  NoticeH2,
} from "../../Styled/N&n";

function NoticeNews() {
  const navigate = useNavigate();

  const onClickHandler = (e, key) => {
    e.preventDefault();
    navigate(`/${key}`);
  };

  return (
    <NoticeContainer>
      <hr />
      <NoticePadding>
        <Section>
          <div>
            <NoticeH2>공지사항</NoticeH2>
            <SectionDiv>
              <SectionTitle>
                <h5>Notice</h5>
                <img
                  src={plusIcon}
                  alt="더보기"
                  width="16px"
                  height="16px"
                  onClick={(e) => {
                    onClickHandler(e, "notice");
                  }}
                  style={{ cursor: "pointer" }}
                />
              </SectionTitle>
              <hr />
              <NoticeContents>
                <span>[공고] 신주발행 공고(제3자 배정방식)</span>
                <span>
                  <img src={clockIcon} alt="시계 아이콘" width="16" />
                  2021-09-15
                </span>
              </NoticeContents>
              <NoticeContents>
                <span>[공고] 신주발행 공고(제3자 배정방식)</span>
                <span>
                  <img src={clockIcon} alt="시계 아이콘" width="16" />
                  2021-09-08
                </span>
              </NoticeContents>
              <NoticeContents>
                <span>[공고] 신주발행 공고(제3자 배정방식)</span>
                <span>
                  <img src={clockIcon} alt="시계 아이콘" width="16" />
                  2021-08-31
                </span>
              </NoticeContents>
            </SectionDiv>
          </div>
          <div>
            <NoticeH2>보도자료</NoticeH2>
            <SectionDiv>
              <div>
                <SectionTitle>
                  <h5>TimF News</h5>
                  <img
                    src={plusIcon}
                    alt="더보기"
                    width="16px"
                    height="16px"
                    onClick={(e) => {
                      onClickHandler(e, "reprot");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </SectionTitle>
                <hr />
              </div>
            </SectionDiv>
          </div>
        </Section>
      </NoticePadding>
      <hr />
    </NoticeContainer>
  );
}

export default NoticeNews;
