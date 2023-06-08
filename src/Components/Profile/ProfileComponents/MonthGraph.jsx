import React from "react";
import "./graph.css";
const MonthGraph = () => {
  return (
    <div className="monthly-graph">
      <div className="main-container">
        <div className="year-stats">
          <div className="month-group">
            <div className="bar h-100"></div>
            <p className="month">Jan</p>
          </div>
          <div className="month-group">
            <div className="bar h-50"></div>
            <p className="month">Feb</p>
          </div>
          <div className="month-group">
            <div className="bar h-75"></div>
            <p className="month">Mar</p>
          </div>
          <div className="month-group">
            <div className="bar h-25"></div>
            <p className="month">Apr</p>
          </div>
          <div className="month-group selected">
            <div className="bar h-100"></div>
            <p className="month">May</p>
          </div>
          <div className="month-group">
            <div className="bar h-50"></div>
            <p className="month">Jun</p>
          </div>
          <div className="month-group">
            <div className="bar h-75"></div>
            <p className="month">Jul</p>
          </div>
          <div className="month-group">
            <div className="bar h-25"></div>
            <p className="month">Aug</p>
          </div>
          <div className="month-group">
            <div className="bar h-50"></div>
            <p className="month">Sep</p>
          </div>
          <div className="month-group">
            <div className="bar h-75"></div>
            <p className="month">Oct</p>
          </div>
          <div className="month-group">
            <div className="bar h-25"></div>
            <p className="month">Nov</p>
          </div>
          <div className="month-group">
            <div className="bar h-100"></div>
            <p className="month">Dez</p>
          </div>
        </div>

        <div className="stats-info">
          <div className="graph-container">
            <div className="percent">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle"
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="85, 100"
                  d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="60, 100"
                  d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p>Total: 2250 kal</p>
          </div>

          <div className="info">
            <p>
              burn rate
              <br />
              <span>Commitment to meals</span>
            </p>
            <p>
              Free meals
              <span>2</span>
            </p>
            <p>
            Commit to drinking water <span>92%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthGraph;
