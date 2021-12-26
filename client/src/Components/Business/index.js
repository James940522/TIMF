import { dummyBusiness } from "../../DummyData/dummyData";
import BusinessContents from "./BusinessContents";

function Business() {
  return (
    <>
      <div>TIMF BUSINESS</div>
      {dummyBusiness.map((el) => {
        return <BusinessContents key={el.title} data={el} />;
      })}
    </>
  );
}

export default Business;
