import { Button } from "../../components";
import computerXL from "../../assets/appleComputersXL.png";
import computerL from "../../assets/appleComputersL.png";
import "./Hero.scss";
const Hero = () => {
  return (
    <main className="hero section__padding ">
      <div className="hero__container">
        <div className="hero__container_heading ">
          <h1>Buy, trade, and hold 350+ cryptocurrencies</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
          <div className="hero__container_heading_btns">
            <Button
              text={"Download App"}
              color={"btn-primary"}
              style={{ padding: "27px 32px" }}
            />
            <Button
              text={"view pricing"}
              color={"btn-secondary"}
              style={{ padding: "27px 32px" }}
            />
          </div>
        </div>
        <div className="hero__container_img">
          <img src={computerXL} alt="computer" className="xl-screens" />
          <img src={computerL} alt="computer" className="l-screens" />
          <div className="hero__container_img-layer"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
