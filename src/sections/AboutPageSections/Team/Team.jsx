import { TeamMemberCard } from "../../../components";
import person1 from "../../../assets/About/person1.png";
import person2 from "../../../assets/About/person2.png";
import "./Team.scss";
const Team = () => {
  return (
    <section className="team section__padding">
      <div className="team__container">
        <div className="team__container_heading">
          <h1>Our Team </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>
        <div className="team__container_cards">
          <TeamMemberCard
            img={person2}
            name={"John Carter"}
            role={"CEO & CO-Founder"}
          />

          <TeamMemberCard
            img={person2}
            name={"John Carter"}
            role={"CEO & CO-Founder"}
          />
          <TeamMemberCard
            img={person2}
            name={"John Carter"}
            role={"CEO & CO-Founder"}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
