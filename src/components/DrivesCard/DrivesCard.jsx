import "./DrivesCard.scss";

const DrivesCard = ({ img, title, text }) => {
  return (
    <div className="drives-card">
      <div className="drives-card_container">
        <div className="drives-card_container_img">
          <img src={img} alt="imag" />
        </div>
        <div className="drives-card_container_body">
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default DrivesCard;
