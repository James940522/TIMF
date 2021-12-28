import background1 from "../../assets/background1.png";
import background2 from "../../assets/background2.png";
import background3 from "../../assets/background3.png";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

function Slide() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active carousel-item-left">
          <img src={background1} alt="slide1" style={{ width: "100%" }} />
          <div className="carousel-caption">
            <h1 className="display-2">대한민국 No.1</h1>
            <h3>Cold Chain Platform</h3>
          </div>
        </div>
        <div className="carousel-item carousel-item-next carousel-item-left">
          <img src={background2} alt="slide2" style={{ width: "100%" }} />
          <div className="carousel-caption">
            <h1 className="display-2">Timf</h1>
            <h3>Connect Freshness</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={background3} alt="slide3" style={{ width: "100%" }} />
          <div className="carousel-caption">
            <h1 className="display-2">Commerce Trend</h1>
            <h3>신선식품 물류를 선도하는 시스템 구축</h3>
          </div>
        </div>
      </div>
      <button>
        <img src={leftArrow} alt="prev" />
      </button>
      <button>
        <img src={rightArrow} alt="next" />
      </button>
    </div>
  );
}

export default Slide;
