import { useNavigate } from "react-router-dom";
import plusIcon from "../../assets/icon_plus.png";

function NoticeNews() {
  const navigate = useNavigate();

  const onClickHandler = (e, key) => {
    e.preventDefault();
    navigate(`/${key}`);
  };

  return (
    <>
      <h2>공지사항</h2>
      <div>
        <div>
          <h5>Notice</h5>
          <img
            src={plusIcon}
            alt="더보기"
            onClick={(e) => {
              onClickHandler(e, "notice");
            }}
          />
        </div>
      </div>
      <h2>보도자료</h2>
      <div>
        <div>
          <h5>TimF News</h5>
          <img
            src={plusIcon}
            alt="더보기"
            onClick={(e) => {
              onClickHandler(e, "reprot");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default NoticeNews;
