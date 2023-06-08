import React from "react";
import "./graph.css";

const WeekGraph = () => {
  return (
    <div>
      <div className="pie animate" style={{ "--p": "90", "--c": "lightgreen" }}>
        90% <h6>water rate</h6>
      </div>
      <div className="pie animate " style={{ "--p": "30", "--c": "orange" }}>
        30% <h6> Lose weight</h6>
      </div>

      <div className="pie animate" style={{ "--p": "20" }}>
        20%<h6>muscle rate</h6>{" "}
      </div>
      <div
        className="pie  animate"
        style={{ "--p": "80", "--c": "purple", "--b": "15px" }}
      >
        60%
        <h6> General rate</h6>
      </div>
    </div>
  );
};

export default WeekGraph;
