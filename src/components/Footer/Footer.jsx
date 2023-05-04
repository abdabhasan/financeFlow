import { Button, Logo, SocialMedia, Copyright } from "../index";
import "./Footer.scss";
const Menu = () => (
  <div className="menu">
    <div>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#pricing">Pricing</a>
      </p>
    </div>
    <div>
      <p>
        <a href="#tokens">Tokens</a>
      </p>
      <p>
        <a href="#blog">Blog</a>
      </p>
      <p>
        <a href="#contact">Contact Us</a>
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
