import { FooterP, FooterHr } from "../../Styled/Foot";

function FooterContents({ data }) {
  const { id, title, contents, Inquiry } = data;
  return (
    <div>
      {id === 2 ? (
        <>
          <FooterHr />
          <h5>{title}</h5>
          <FooterHr />
          {contents.map((el, idx) => {
            return <FooterP key={idx}>{el}</FooterP>;
          })}
          <br />
          <FooterP>{Inquiry[0]}</FooterP>
          <FooterP>{Inquiry[1]}</FooterP>
        </>
      ) : (
        <>
          <FooterHr />
          <h5>{title}</h5>
          <FooterHr />
          {contents.map((el, idx) => {
            return <FooterP key={idx}>{el}</FooterP>;
          })}
        </>
      )}
    </div>
  );
}

export default FooterContents;
