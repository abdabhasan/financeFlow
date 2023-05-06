import "bootstrap/dist/css/bootstrap.min.css";
import { DrivesCard } from "../index";
import icon1 from "../../assets/About/icon1.png";
import icon2 from "../../assets/About/icon2.png";
import icon3 from "../../assets/About/icon3.png";
import icon4 from "../../assets/About/icon4.png";
import "./WhatDrives.scss";
const WhatDrives = () => {
  return (
    <div className="what-drives">
      <div className="what-drives_container">
        <div className="what-drives_container_heading">
          <h1>What drives Finance Flow?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>
        <div className=" row what-drives_container_cards">
          <div className="col-lg-6  ">
            <div className="row mt-4 ">
              <DrivesCard
                img={icon1}
                title={"Open Source"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
                }
              />
            </div>
            <div className="row mt-4 ">
              <DrivesCard
                img={icon2}
                title={"Transparent"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
                }
              />
            </div>
          </div>
          <div className="  col-lg-6 mt-4 ">
            <div className="row  ">
              <DrivesCard
                img={icon3}
                title={"worldwide"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
                }
              />
            </div>
            <div className="row mt-4 ">
              <DrivesCard
                img={icon4}
                title={"Community Driven"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDrives;
