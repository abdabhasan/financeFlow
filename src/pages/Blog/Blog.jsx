import { NewsCard, CTA } from "../../components";
import img from "../../assets/blog/Hcard.png";
import cardImg from "../../assets/news.png";
import authorImg from "../../assets/avatar.png";
import avatar from "../../assets/blog/avatar.png";
import "./Blog.scss";
const Blog = () => {
  return (
    <section className="blog section__padding">
      <div className="blog__container">
        <div className="blog__container_heading">
          <h1>Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
        </div>
        <div className="blog__container_card">
          <NewsCard
            cardImg={img}
            title={"Cryptocurrency Explained With Pros and Cons for Investment"}
            text={
              "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
            }
            authorImg={avatar}
            authorName={"Alex Turner"}
            date={"August 2, 2021"}
          />
        </div>
        <div className="blog__container_cta">
          <CTA />
        </div>
        <div className="blog__container_posts">
          <div className="blog__container_posts_heading">
            <h1>Latest Posts</h1>
            <ul>
              <li>All</li>
              <li>Apps</li>
              <li>Products</li>
              <li>Tutorial</li>
            </ul>
          </div>

          <div className="row blog__container_posts_cards justify-content-center">
            <div className="row">
              <div className="col-lg-4 my-2">
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

              <div className="col-lg-4 my-2">
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

              <div className="col-lg-4 my-2">
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
            </div>
            <div className="row">
              <div className="col-lg-4 my-2">
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
              <div className="col-lg-4 my-2">
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
              <div className="col-lg-4 my-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
