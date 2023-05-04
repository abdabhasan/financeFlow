import "./Feature.scss";

const Feature = ({ icon, text }) => {
  return (
    <div className="feature">
      <div className="feature__container">
        <div className="feature__container_icon">
          <img src={icon} alt="icon" />
        </div>
        <div className="feature__container_text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
