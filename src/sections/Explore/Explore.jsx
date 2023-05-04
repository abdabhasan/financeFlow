import phones from "../../assets/explorePhones.png";
import { Button } from "../../components";
import "./Explore.scss";
const Explore = () => {
  return (
    <section className="explore ">
      <div className="explore__container section__padding">
        <div className="explore__container_heading">
          <h1>Explore endless possibilities with FinanceFlow</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <div className="explore__container_heading_btn">
            <Button text={"download app"} color={"btn-white"} />
          </div>
        </div>
        <div className="explore__container_img">
          <img src={phones} alt="phones" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
