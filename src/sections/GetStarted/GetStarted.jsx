import video from "../../assets/features/video.png";
import feature7 from "../../assets/features/feature7.png";
import feature8 from "../../assets/features/feature8.png";
import feature9 from "../../assets/features/feature9.png";
import { Feature } from "../../components";
import "./GetStarted.scss";
const GetStarted = () => {
  return (
    <section className="rewards  section__padding">
      <div className="rewards__container">
        <div className="rewards__container_heading">
          <h1>Earn daily rewards on your idle tokens</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="rewards__container_heading_features">
            <Feature icon={feature7} text={"Download app"} />
            <Feature icon={feature8} text={"Create a free account"} />
            <Feature icon={feature9} text={"Start trading"} />
          </div>
        </div>
        <div className="rewards__container_img">
          <img src={video} alt="computer" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
