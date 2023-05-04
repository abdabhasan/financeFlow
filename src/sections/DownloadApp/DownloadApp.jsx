import { DownloadCardAndroid, DownloadCardIos } from "../../components";
import "./DownloadApp.scss";
const DownloadApp = () => {
  return (
    <section className="download section__padding">
      <div className="download__container">
        <div className="download__container_heading">
          <h1>Download our app</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non
            neque orci amet, amet .
          </p>
        </div>
        <div className="download__container_cards">
          <DownloadCardIos />
          <DownloadCardAndroid />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
