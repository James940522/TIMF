import { BusinessCard, BusinessCardBody } from "../../Styled/BC";

function BusinessContents({ data }) {
  // console.log(data)
  return (
    <BusinessCard>
      <div>
        <img src={data.img} alt={data.id} width="425px" height="336px" />
      </div>
      <BusinessCardBody>
        <h4 style={{ marginBottom: "10px" }}>{data.title}</h4>
        <p style={{ marginBottom: "10px" }}>{data.contents}</p>
        <button>더 알아보기</button>
      </BusinessCardBody>
    </BusinessCard>
  );
}

export default BusinessContents;
