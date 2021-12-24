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
            <Link to='/'>
                <span>
                    사업소개
                </span>
            </Link>
            <Link to='/'>
                <span>
                    공지사항
                </span>
            </Link>
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