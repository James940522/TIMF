import { Card, Img, CardBody, BusinessCardBtn } from "../../Styled/BC";

function BusinessContents({ data }) {
  // console.log(data)
  return (
    <Card>
      <Img src={data.img} alt={data.id} />
      <CardBody>
        <h4 style={{ marginBottom: "10px" }}>{data.title}</h4>
        <p style={{ marginBottom: "10px" }}>{data.contents}</p>
        <BusinessCardBtn>더 알아보기</BusinessCardBtn>
      </CardBody>
    </Card>
  );
}

export default BusinessContents;
