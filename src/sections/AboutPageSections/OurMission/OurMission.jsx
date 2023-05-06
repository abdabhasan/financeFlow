import planet from "../../../assets/About/planet.png";
import "./OurMission.scss";
const OurMission = () => {
  return (
    <section className="mission section__padding">
      <div className="mission__container">
        <div className="mission__container_heading">
          <h1>Our mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies. Sollicitudin odio elementum urna
            placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
            Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
            ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
          </p>
          <p>
            Vulputate pellentesque proin facilisis dignissim gravida sed
            faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
            nisl, in quis nulla tellus suscipit id. Semper velit odio cras
            pretium tristique habitant. Elit eu penatibus congue orci turpis.
            Enim diam id.
          </p>
          <h1 className="mt-5">Our story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies. Sollicitudin odio elementum urna
            placerat lacus, vulputate. Non malesuada viverra et ultrices cras.
            Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus
            ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
          </p>
          <p>
            Vulputate pellentesque proin facilisis dignissim gravida sed
            faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
            nisl, in quis nulla tellus suscipit id. Semper velit odio cras
            pretium tristique habitant. Elit eu penatibus congue orci turpis.
            Enim diam id.
          </p>
        </div>
        <div className="mission__container_img">
          <img src={planet} alt="planet" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
