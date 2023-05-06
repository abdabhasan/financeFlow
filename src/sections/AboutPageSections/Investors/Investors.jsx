import { Brand } from "../../../components";
import "./Investors.scss";
const Investors = () => {
  return (
    <section className="investors section__padding">
      <div className="investors__container">
        <div className="investors__container_heading">
          <h1>Investors</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>
        <div className="investors__container_brands">
          <Brand />
        </div>
      </div>
    </section>
  );
};

export default Investors;
