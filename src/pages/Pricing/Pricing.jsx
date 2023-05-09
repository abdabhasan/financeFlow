import { Feature, PricingCard } from "../../components";
import icon1 from "../../assets/pricing/icon1.png";
import icon2 from "../../assets/pricing/icon2.png";
import icon3 from "../../assets/pricing/icon3.png";
import icon4 from "../../assets/pricing/icon4.png";
import "./Pricing.scss";
const Pricing = () => {
  return (
    <section className="pricing section__padding">
      <div className="pricing__container">
        <div className="pricing__container_heading">
          <h1>Pricing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque
          </p>
        </div>
        <div className="pricing__container_features">
          <Feature icon={icon1} text={"Send & receive"} />
          <Feature icon={icon2} text={"Trading Charts"} />
          <Feature icon={icon3} text={"Wallet"} />
          <Feature icon={icon4} text={"Real Time Trading"} />
        </div>
        <div className="pricing__container_cards">
          <PricingCard
            plan={"basic"}
            price={"$ 100 USD"}
            text={
              "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh."
            }
          />
          <PricingCard
            plan={"pro"}
            price={"$ 100 USD"}
            text={
              "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh."
            }
          />
          <PricingCard
            plan={"expert"}
            price={"$ 100 USD"}
            text={
              "Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
