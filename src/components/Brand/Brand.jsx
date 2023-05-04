import { company1, company2, company4, company5, company3 } from "./imports";
import "./Brand.scss";
const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={company1} alt="google" />
      </div>
      <div>
        <img src={company2} alt="slack" />
      </div>
      <div>
        <img src={company4} alt="atlassian" />
      </div>
      <div>
        <img src={company5} alt="dropbox" />
      </div>
      <div>
        <img src={company3} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
