import React from "react";
import "../profile.css";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
function Datepicker() {
  
  return (
    <div className="col-12 row " data-aos="flip-left">
      <div className="col-12 row mb-3">
        <div className="col-8">November 2023</div>
        <div className="col-3">
          <IoIosArrowBack/>
          <IoIosArrowForward/>
        </div>
      </div>
      <div className="col-10 row days d-flex justify-content-between text-center">
        <button className="col-1 ps-0 pt-2 border-0">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button>
        <button className="col-2 ps-0 pt-2">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button><button className="col-2 ps-0 pt-2">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button><button className="col-2 ps-0 pt-2">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button><button className="col-2 ps-0 pt-2 active-day">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button><button className="col-2 ps-0 pt-2">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button><button className="col-1 ps-0 pt-2">
          <div >
            <h5>Sat</h5>
            <h6>01</h6>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Datepicker;
