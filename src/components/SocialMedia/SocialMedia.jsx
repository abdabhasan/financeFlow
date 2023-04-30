import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="#" target="_blank">
        <FaFacebookSquare />
      </a>
      <a href="#" target="_blank">
        <FaTwitterSquare />
      </a>
      <a href="#" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialMedia;
