import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Logo, Button } from "../index";
import "./Navbar.scss";
const Menu = () => (
  <>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="about">About</Link>
    </p>
    <p>
      <Link to="pricing">Pricing</Link>
    </p>
    <p>
      <Link to="tokens">Tokens</Link>
    </p>
    <p>
      <Link to="blog">Blog</Link>
    </p>
    <p>
      <Link to="contact">Contact Us</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar  mx-5 my-3">
      <div className="navbar__links">
        <div className="navbar__links_logo">
          <Logo />
        </div>
        <div className="navbar__links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar__btn">
        <Button text={"download"} color={"btn-primary"} />
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu_container scale-up-center">
            <div className="navbar__menu_container-links">
              <Menu />
              <div className="navbar__menu_container-links_btn">
                <Button text={"download"} color={"btn-primary"} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
