import background1 from "../../assets/background1.png";
import background2 from "../../assets/background2.png";
import background3 from "../../assets/background3.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

function Slide() {
  return (
    <div>
      <div>
        <div>
          <img src={background1} alt="slide1" width="100%" height="100%" />
          <div>
            <h1>대한민국 No.1</h1>
            <h3>Cold Chain Platform</h3>
          </div>
        </div>
        <div>
          <img src={background2} alt="slide2" width="100%" height="100%" />
          <div>
            <h1 className="display-2">Timf</h1>
            <h3>Connect Freshness</h3>
          </div>
        </div>
        <div>
          <img src={background3} alt="slide3" width="100%" height="100%" />
          <div>
            <h1>Commerce Trend</h1>
            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
          </div>
        </div>
      </div>
      <button>
        <img src={leftArrow} alt="prev" width="20" height="20" />
      </button>
      <button>
        <img src={rightArrow} alt="next" width="20" height="20" />
      </button>
    </div>
  );
}

export default Slide;
