import "./TimelineItem.scss";

const TimelineItem = ({ date, title, text }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item__container">
        <div className="timeline-item__container_ball"></div>
        <div className="timeline-item__container_body">
          <h4>{date}</h4>
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
