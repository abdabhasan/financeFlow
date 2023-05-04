import { Button } from "../index.js";
import "./NewsCard.scss";

const NewsCard = ({ cardImg, title, text, authorImg, authorName, date }) => {
  return (
    <div className="news-card">
      <div className="news-card_container">
        <div className="news-card_container_img">
          <img src={cardImg} alt="image" />
        </div>
        <div className="news-card_container_body">
          <div className="news-card_container_body_btn">
            <Button text={"products"} color={"btn-primary"} />
          </div>
          <div className="news-card_container_body_heading">
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
          <div className="news-card_container_body_author">
            <div className="news-card_container_body_author-img">
              <img src={authorImg} alt="authorImage" />
            </div>
            <div className="news-card_container_body_author-name">
              <h5>{authorName}</h5>
              <p>{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
