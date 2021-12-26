import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Nav () {

    const open = () => {
        window.open("https://tmsdev.teamfresh.co.kr/popup/deliveryAreaSearchPopupForCustomer","새벽배송 여부 확인", "width=500, height=500, left=100, top=50")
    }

    return (
        <div>
            <Link to='/'>
                <span>
                    <img src={logo} alt='logo' width="50px"/>
                </span>
            </Link>
            네비게이션
            <Link to='/'>
                <span>
                    회사소개
                </span>
            </Link>
            <ul>
                <li>회사소개</li>
                <li>협력사 소개</li>
                <li>고객사 소개</li>
                <li>오시는 길</li>
            </ul>
            <Link to='/'>
                <span>
                    사업소개
                </span>
            </Link>
            <ul>
                <li>새벽배송</li>
                <li>화물주선</li>
                <li>풀필먼트</li>
                <li>그로서리</li>
            </ul>
            <Link to='/'>
                <span>
                    공지사항
                </span>
            </Link>
            <ul>
                <li>공지사항</li>
                <li>인재채용</li>
                <li>서비스 소개</li>
                
            </ul>
            <Link to='/'>
                <span>
                    보도자료
                </span>
            </Link>
            <button onClick={() => open()}>
                새벽배송
            </button>
        </div>
    )
}

export default Nav