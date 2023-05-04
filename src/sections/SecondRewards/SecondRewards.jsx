import featuresComputer from "../../assets/features/featuresComputer.png";
import computerL from "../../assets/appleComputersL.png";
import feature4 from "../../assets/features/feature4.png";
import feature5 from "../../assets/features/feature5.png";
import feature6 from "../../assets/features/feature6.png";
import { Feature } from "../../components";
import "./SecondRewards.scss";
const SecondRewards = () => {
  return (
    <section className="rewards second-rewards section__padding">
      <div className="rewards__container">
        <div className="rewards__container_heading">
          <h1>Earn daily rewards on your idle tokens</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="rewards__container_heading_features">
            <Feature icon={feature4} text={"100% Private data"} />
            <Feature icon={feature5} text={"99.99% Uptime guarantee"} />
            <Feature icon={feature6} text={"24/7 Dedicated support"} />
          </div>
        </div>
        <div className="rewards__container_img">
          <img src={featuresComputer} alt="computer" className="xl-screens" />
          <img src={computerL} alt="computer" className="l-screens" />
        </div>
      </div>
    </section>
  );
};

export default SecondRewards;
