import { dummyFooter } from "../../DummyData/dummyData";
import FooterContents from "./footerContents";
import {
  FooterContainer,
  FooterTextContainer,
  LightHr,
} from "../../Styled/Foot";

function Footer() {
  return (
    <FooterContainer>
      <FooterTextContainer>
        {dummyFooter.map((el) => {
          return <FooterContents key={el.id} data={el} />;
        })}
      </FooterTextContainer>
      <div>
        <LightHr />
        <h5>© TeamFresh All right reserved</h5>
      </div>
    </FooterContainer>
  );
}

export default Footer;
