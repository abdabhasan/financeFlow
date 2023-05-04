import { Button, NewsCard } from "../../components";
import authorImg from "../../assets/avatar.png";
import cardImg from "../../assets/news.png";
import "./News.scss";
const News = () => {
  return (
    <section className="news section__padding">
      <div className="news__container">
        <div className="news__container_heading">
          <h1>Browse our latest news</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet .
          </p>
        </div>
        <div className="news__container_cards">
          <NewsCard
            cardImg={cardImg}
            title={"The Basics about Cryptocurrency"}
            text={
              "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
            }
            authorImg={authorImg}
            authorName={"Alex Turner"}
            date={"August 2, 2021"}
          />
          <NewsCard
            cardImg={cardImg}
            title={"The Basics about Cryptocurrency"}
            text={
              "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
            }
            authorImg={authorImg}
            authorName={"Alex Turner"}
            date={"August 2, 2021"}
          />
          <NewsCard
            cardImg={cardImg}
            title={"The Basics about Cryptocurrency"}
            text={
              "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
            }
            authorImg={authorImg}
            authorName={"Alex Turner"}
            date={"August 2, 2021"}
          />
        </div>
        <div className="news__container_btn">
          <Button text={"View All Articles"} color={"btn-secondary"} />
        </div>
      </div>
    </section>
  );
};

export default News;
