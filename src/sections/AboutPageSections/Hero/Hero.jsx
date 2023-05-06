import { WhatDrives } from "../../../components";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="about__hero section__padding">
      <div className="about__hero_container">
        <div className="about__hero_container_heading">
          <h1>About Finance Flow</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet
            vitae dolor non aliquam. Malesuada.
          </p>
        </div>
      </div>
      <div className="about__hero_container_drives">
        <WhatDrives />
      </div>
    </section>
  );
};

export default Hero;
