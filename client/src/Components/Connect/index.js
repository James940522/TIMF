import { ConnectContents, ConnectImg } from "../../Styled/Con";

import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";

function Connect() {
  const openConnect = (e, key) => {
    e.preventDefault();
    if (key === "facebook") {
      window.open(
        "https://www.facebook.com/teamfresh.timf",
        "팀프레시 페이스북 페이지"
      );
    } else if (key === "youtube") {
      window.open(
        "https://www.youtube.com/watch?v=vlXzU-1Oec4",
        "팀프레시 유튜브"
      );
    }
  };

  return (
    <section>
      <div>
        <h2>Connect</h2>
        <ConnectContents>
          <ConnectImg>
            <img
              src={facebook}
              alt="facebook logo"
              onClick={(e) => {
                openConnect(e, "facebook");
              }}
              width="65px"
              height="65px"
              style={{ cursor: "pointer" }}
            />
          </ConnectImg>
          <ConnectImg>
            <img
              src={youtube}
              alt="youtube logo"
              onClick={(e) => {
                openConnect(e, "youtube");
              }}
              width="65px"
              height="65px"
              style={{ cursor: "pointer" }}
            />
          </ConnectImg>
        </ConnectContents>
      </div>
    </section>
  );
}

export default Connect;
