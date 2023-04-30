import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Logo, Button } from "../index";
import "./Navbar.scss";
const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About</a>
    </p>
    <p>
      <a href="#pricing">Pricing</a>
    </p>
    <p>
      <a href="#tokens">Tokens</a>
    </p>
    <p>
      <a href="#blog">Blog</a>
    </p>
    <p>
      <a href="#contact">Contact Us</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
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
