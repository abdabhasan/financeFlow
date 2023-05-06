import { Link } from "react-router-dom";
import { Button, Logo, SocialMedia, Copyright } from "../index";
import "./Footer.scss";
const Menu = () => (
  <div className="menu">
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="about">About</Link>
      </p>
      <p>
        <Link to="pricing">Pricing</Link>
      </p>
    </div>
    <div>
      <p>
        <Link to="tokens">Tokens</Link>
      </p>
      <p>
        <Link to="blog">Blog</Link>
      </p>
      <p>
        <Link to="contact">Contact Us</Link>
      </p>
    </div>
  </div>
);
const Footer = () => {
  return (
    <section className="footer ">
      <div className="footer__container section__padding">
        <div className="footer__container_social">
          <Logo />
          <SocialMedia />
        </div>
        <div className="footer__container_menu-download">
          <div className="footer__container_menu">
            <h5>Menu</h5>
            <Menu />
          </div>
          <div className="footer__container_download">
            <h4>Download our Application</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer
            </p>
            <div className="footer__container_download_btns">
              <Button text={"app store"} color={"btn-primary"} />
              <Button text={"play store"} color={"btn-primary"} />
            </div>
          </div>
        </div>
        <div className="footer__container_copyright">
          <Copyright />
        </div>
      </div>
    </section>
  );
};

export default Footer;
