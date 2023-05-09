import { Button } from "../index";
import "./PricingCard.scss";
const PricingCard = ({ plan, price, text }) => {
  return (
    <div className="pricing-card">
      <div className="pricing-card__container">
        <div className="pricing-card__container_plan">
          <Button text={plan} color={"btn-primary"} />
        </div>
        <div className="pricing-card__container_price">
          <h1>{price}</h1>
          <p>{text}</p>
        </div>
        <div className="pricing-card__container_features">
          <h5>Features</h5>
          <ul>
            <li>Everything included in Basic</li>
            <li>Trading up to 1M$ per month</li>
            <li>Windows & macOS App</li>
            <li>Premium Support</li>
          </ul>
        </div>
        <div className="pricing-card__container_btn">
          <Button text={"contact us"} color={"btn-primary"} />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
