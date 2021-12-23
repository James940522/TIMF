import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Nav () {

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
        </div>
    )
}

export default Nav