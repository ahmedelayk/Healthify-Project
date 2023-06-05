import React from "react";
import "../profile.css";
import { FcPodiumWithoutSpeaker } from "react-icons/fc";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import { FcPodiumWithAudience } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";


const TodayReport = () => {
  return (
    <div>
      <div className="col-12 row">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <FcFlashOn />
          </div>
          <div className="col-8 type-food">jiuuu</div>
        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <FcFlashOn />
          </div>
          <div className="col-8 type-food">jiuuu</div>
        </div>
          </div>
          <div className="col-12 row">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <FcPodiumWithSpeaker />
          </div>
          <div className="col-8 type-food">jiuuu</div>
        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <FcFlashOn />
          </div>
          <div className="col-8 type-food">jiuuu</div>
        </div>
          </div>
          <div className="col-12 row">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <FcPodiumWithAudience />
          </div>
          <div className="col-8 type-food">jiuuu</div>
        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <FcFlashOn />
          </div>
          <div className="col-8 type-food">jiuuu</div>
        </div>
      </div>
    </div>
  );
};

export default TodayReport;
