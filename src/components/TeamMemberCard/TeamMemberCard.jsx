import "./TeamMemberCard.scss";

const TeamMemberCard = ({ img, name, role }) => {
  return (
    <div className="team-member">
      <div className="team-member__container">
        <div className="team-member__container_img">
          <img src={img} alt="Team Member" />
        </div>
        <div className="team-member__container_body">
          <h4>{name}</h4>
          <h5>{role}</h5>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
