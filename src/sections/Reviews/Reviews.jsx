import { Button, Carousel } from "../../components";
import reviews from "../../data/reviews";
import "./Reviews.scss";
const Reviews = () => {
  return (
    <section className="reviews section__padding">
      <div className="reviews__container">
        <div className="reviews__container_heading  ">
          <h1>What out users say?</h1>
          <div className="reviews__container_heading_btn">
            <Button text={"download app"} color={"btn-primary"} />
          </div>
        </div>
        <div className="reviews__container_carousel">
          <Carousel reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
