import React from "react";
import "./profile.css";
import Datepicker from "./Datepicker";
import { Button } from "react-bootstrap";

import TodayReport from "./ProfileComponents/TodayReport";

function Profile() {
  return (
    <div className="row profile">
      {/* left side bar */}
      <div className="col-lg-3 col-md-6 col-12 left-side">left</div>
      <div className="col-lg-1 col-md-6 col-12 left-"></div>
      {/* middle */}
      <div className="col-lg-4 col-md-6 col-12  middle ">middle</div>
      {/* right side bar */}
      <div className="col-lg-1 col-md-6 col-12 "></div>
      <div className="col-lg-3 col-md-6 col-12 right-side row ">
        <div className="col-12 date-picker">
          <Datepicker />
        </div>
        <div className="col-12">
          <h4>Today report</h4>
        </div>

        <TodayReport />
    
        <div className="col-12">
          <h5>Recent workouts</h5>
        </div>
        <div className="col-12">
          <p>No workouts done</p>
        </div>
        <Button className="lets-btn col-lg-5 col-3">Lets start</Button>
      </div>
    </div>
  );
}

export default Profile;
