import phones from "../../assets/rewardsPhone.png";
import feature1 from "../../assets/features/feature1.png";
import feature2 from "../../assets/features/feature2.png";
import feature3 from "../../assets/features/feature3.png";
import { Feature } from "../../components";
import "./Rewards.scss";
const Rewards = () => {
  return (
    <section className="rewards  section__padding">
      <div className="rewards__container">
        <div className="rewards__container_img">
          <img src={phones} alt="phones" />
        </div>
        <div className="rewards__container_heading">
          <h1>Earn daily rewards on your idle tokens</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="rewards__container_heading_features">
            <Feature icon={feature1} text={"Lowest fees in market"} />
            <Feature icon={feature2} text={"Fast and secure transactions"} />
            <Feature icon={feature3} text={"256-bit secure encryption"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
