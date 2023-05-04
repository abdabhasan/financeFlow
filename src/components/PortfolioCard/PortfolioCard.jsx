import "./PortfolioCard.scss";

const PortfolioCard = ({ img, title, cardType }) => {
  return (
    <div className={`portfolio-card ${cardType}`}>
      <div className="portfolio-card__container">
        <div className="profolio-card__container_img">
          <img src={img} alt="img" />
        </div>
        <div className="portfolio-card__container_heading">
          <h4>{title}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
