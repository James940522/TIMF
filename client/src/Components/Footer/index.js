import { dummyFooter } from '../../DummyData/dummyData'
import FooterContents from "./footerContents";

function Footer () {

    return (
        <>
        { dummyFooter.map(el => {
            <FooterContents key={el.id} contents={el} />
        })
}
        <div>영업 및 제휴 문의:</div>
        <div>E-mail: sales@timf.co.kr</div>
        </>
    )
}

export default Footer;