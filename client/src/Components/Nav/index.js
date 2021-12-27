import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PopupDom from "./popupDom";
import PopupPostCode from "./popupPostCode";
import logo from "../../assets/logo.png";
import { NavDiv, NavUl, NavMenu, NavSpan } from "../../Styled/Nav";

function Nav() {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const open = () => {
    // window.open(
    //   "https://tmsdev.teamfresh.co.kr/popup/deliveryAreaSearchPopupForCustomer",
    //   "새벽배송 여부 확인",
    //   "width=500, height=500, left=100, top=50"
    // );
    setIsPopupOpen(true);
  };

  return (
    <NavDiv>
      <Link to="/">
        <span>
          <img src={logo} alt="logo" width="110px" />
        </span>
      </Link>
      <NavMenu>
        <div>
          <Link to="/about">
            <NavSpan>회사소개</NavSpan>
          </Link>
          <NavUl className="sub_menu">
            <li>회사소개</li>
            <li>협력사 소개</li>
            <li>고객사 소개</li>
            <li>오시는 길</li>
          </NavUl>
        </div>
        <div>
          <Link to="/introduction">
            <NavSpan>사업소개</NavSpan>
          </Link>
          <NavUl>
            <li>새벽배송</li>
            <li>화물주선</li>
            <li>풀필먼트</li>
            <li>그로서리</li>
          </NavUl>
        </div>
        <div>
          <Link to="/notice">
            <NavSpan>공지사항</NavSpan>
          </Link>
          <NavUl>
            <li>공지사항</li>
            <li>인재채용</li>
            <li>서비스 소개</li>
          </NavUl>
        </div>
        <div>
          <Link to="/report">
            <NavSpan>보도자료</NavSpan>
          </Link>
        </div>
        <div>
          <button type="button" onClick={openPostCode}>
            배송지역검색
          </button>
          <div id="popupDom">
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode onClose={closePostCode} />
              </PopupDom>
            )}
          </div>
        </div>
      </NavMenu>
    </NavDiv>
  );
}

export default Nav;
