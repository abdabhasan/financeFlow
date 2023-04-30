import logo from "../../assets/logo.png";
import "./Logo.scss";
const Logo = () => {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
