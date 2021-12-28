import { dummyBusiness } from "../../DummyData/dummyData";
import BusinessContents from "./BusinessContents";
import { BusinessDiv } from "../../Styled/BC";

function Business() {
  return (
    <>
      <h1>TIMF BUSINESS</h1>
      <hr />
      <BusinessDiv>
        {dummyBusiness.map((el) => {
          return <BusinessContents key={el.title} data={el} />;
        })}
      </BusinessDiv>
    </>
  );
}

export default Business;
