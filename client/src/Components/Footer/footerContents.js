function FooterContents({ data }) {
  const { id, title, contents } = data;
  return (
    <>
      <div>{title}</div>
      {contents.map((el, idx) => {
        return (
          <ul key={idx}>
            <li>{el}</li>
          </ul>
        );
      })}
    </>
  );
}

export default FooterContents;
