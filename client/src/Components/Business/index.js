import { dummyBusiness } from "../../DummyData/dummyData";
import BusinessContents from "./BusinessContents";
import {
  BusinessTitleContainer,
  BusinessTitle,
  TitleDiv,
  BusinessCardContainer,
} from "../../Styled/BC";

function Business() {
  return (
    <>
      <BusinessTitleContainer>
        <BusinessTitle>
          <TitleDiv>
            <h1>TIMF BUSINESS</h1>
          </TitleDiv>
          <hr />
        </BusinessTitle>
      </BusinessTitleContainer>
      <BusinessCardContainer>
        {dummyBusiness.map((el) => {
          return <BusinessContents key={el.title} data={el} />;
        })}
      </BusinessCardContainer>
    </>
  );
}

export default Business;
