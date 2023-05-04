import { Button } from "../index";
import iphone from "../../assets/iPhone.png";
import "./DownloadCardIos.scss";
const DownloadCardIos = () => {
  return (
    <div className="download-card">
      <div className="download-card__container">
        <div className="download-card__container_body">
          <div className="download-card__container_body_heading">
            <h1>Download for IOS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer in pellentesque tortor semper elementum. Felis.
            </p>
            <Button text={"app store"} color={"btn-primary"} />
          </div>
        </div>
        <div className="download-card__container_img">
          <img src={iphone} alt="iphone" />
        </div>
      </div>
    </div>
  );
};

export default DownloadCardIos;
