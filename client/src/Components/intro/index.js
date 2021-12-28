import Slide from "./slide";
import { IntroDiv, IntroChildDiv, Title, Content } from "../../Styled/Intro";

function Intro() {
  return (
    <div>
      <Slide />
      <IntroDiv>
        <IntroChildDiv>
          <Title>대한민국 No.1 Cold-Chain Platform</Title>
          <Content>
            팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를
            제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를
            위한 설비/역량을 보유하고 있습니다.
          </Content>
        </IntroChildDiv>
      </IntroDiv>
    </div>
  );
}

export default Intro;
