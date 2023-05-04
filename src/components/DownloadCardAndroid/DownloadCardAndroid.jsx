import { Button } from "../index";
import samsung from "../../assets/samsung.png";
import "./DownloadCardAndroid.scss";
const DownloadCardAndroid = () => {
  return (
    <div className="download-card">
      <div className="download-card__container">
        <div className="download-card__container_body">
          <div className="download-card__container_body_heading">
            <h1>Download for Android</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer in pellentesque tortor semper elementum. Felis.
            </p>
            <Button text={"play store"} color={"btn-primary"} />
          </div>
        </div>
        <div className="download-card__container_img">
          <img src={samsung} alt="samsung" />
        </div>
      </div>
    </div>
  );
};

export default DownloadCardAndroid;
