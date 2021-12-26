import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";

function Connect() {
  return (
    <section>
      <div>
        <img src={facebook} alt="facebook logo" />
      </div>
      <div>
        <img src={youtube} alt="youtube logo" />{" "}
      </div>
      <ul></ul>
    </section>
  );
}

export default Connect;
