import { TimelineItem } from "../../../components";
import "./Timeline.scss";
const Timeline = () => {
  return (
    <section className="timeline section__padding">
      <div className="timeline__container">
        <div className="timeline__container_heading">
          <h1>Timeline</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            tempore. Facilis repudiandae corrupti voluptates voluptatibus
            aliquid modi in, nostrum, harum laboriosam omnis hic eveniet officia
            aspernatur eaque magnam, a consectetur!
          </p>
        </div>
        <div className="timeline__container_items">
          <TimelineItem
            date={"2014"}
            title={"Announcement"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."
            }
          />
          <TimelineItem
            date={"2016"}
            title={"Announcement"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."
            }
          />
          <TimelineItem
            date={"2018"}
            title={"Announcement"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."
            }
          />
          <TimelineItem
            date={"2022"}
            title={"Announcement"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
