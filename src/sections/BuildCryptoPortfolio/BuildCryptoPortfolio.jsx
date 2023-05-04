import { PortfolioCard, Button } from "../../components";
import {
  portfolioCard1,
  portfolioCard2,
  portfolioCard3,
  portfolioCard4,
  portfolioCard5,
} from "./imports";
import "./BuildCryptoPortfolio.scss";

const BuildCryptoPortfolio = () => {
  return (
    <section className="build-crypto section__padding">
      <div className="build-crypto__container">
        <div className="build-crypto__container_heading">
          <h1>Build your crypto portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>
        <div className="build-crypto__container_cards">
          <div className="build-crypto__container_cards-col">
            <PortfolioCard img={portfolioCard1} title={"Send & Receive"} />
            <PortfolioCard img={portfolioCard2} title={"Send & Receive"} />
          </div>
          <div className="build-crypto__container_cards-col second-col">
            <PortfolioCard
              img={portfolioCard5}
              title={"Send & Receive"}
              cardType={"card-primary"}
            />
          </div>
          <div className="build-crypto__container_cards-col">
            <PortfolioCard img={portfolioCard3} title={"Send & Receive"} />
            <PortfolioCard img={portfolioCard4} title={"Send & Receive"} />
          </div>
        </div>
        <div className="build-crypto__container-layer"></div>
        <div className="build-crypto__container_btn">
          <Button text={"download app"} color={"btn-primary"} />
        </div>
      </div>
    </section>
  );
};

export default BuildCryptoPortfolio;
