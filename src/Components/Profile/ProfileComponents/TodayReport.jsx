import React from "react";
import "../profile.css";
import { FcFlashOn } from "react-icons/fc";
import breakfast from "../../assets/images/Icons/breakfast.png";
import dinner from "../../assets/images/Icons/dinner.png";
import launch from "../../assets/images/Icons/launch.png";
import fire from "../../assets/images/Icons/fire.png";

const TodayReport = () => {
  return (
    <>
      <div className="col-12 row mb-3">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <img src={breakfast} alt="breakfast" className="icon-img " />
          </div>
          <div className="col-8 type-food">
            <h6>Breakfast</h6> <span>08:00 AM</span>
          </div>
        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <img src={fire} alt="breakfast" className="icon-fire " />
          </div>
          <div className="col-8 type-food">100 kal</div>
        </div>
      </div>
      <div className="col-12 row mb-3">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <img src={launch} alt="launch" className="icon-img" />
          </div>
          <div className="col-8 type-food">
            <h6>Launch</h6> <span>08:00 AM</span>
          </div>        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <img src={fire} alt="breakfast" className="icon-fire " />
          </div>
          <div className="col-8 type-food">100 kal</div>
        </div>
      </div>
      <div className="col-12 row mb-3">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <img src={dinner} alt="dinner" className="icon-img " />
          </div>
          <div className="col-8 type-food">
            <h6>Dinner</h6> <span>08:00 AM</span>
          </div>        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <img src={fire} alt="breakfast" className="icon-fire " />
          </div>
          <div className="col-8 type-food">100 kal</div>
        </div>
      </div>
    </>
  );
};

export default TodayReport;
