import { Button } from "../../components";
import "./NoPage.scss";
const NoPage = () => {
  return (
    <section className="no-page section__padding">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you're looking for can't be found. Double-check the URL and try
        again. Or click the button below.
      </p>
      <div className="no-page_btns">
        <Button text={"view pricing"} color={"btn-primary"} />
        <Button text={"go home"} color={"btn-secondary"} />
      </div>
    </section>
  );
};

export default NoPage;
