import React from "react";
import "../profile.css";
import breakfast from "../../assets/images/Icons/breakfast.webp";
import dinner from "../../assets/images/Icons/dinner.webp";
import launch from "../../assets/images/Icons/launch.webp";
import fire from "../../assets/images/Icons/fire.webp";
import { useState } from "react";
import { useEffect } from "react";

const TodayReport = () => {
  const [selectedBreakfast, setSelectedBreakfast] = useState();
  const [selectedLunch, setSelectedLunch] = useState();
  const [selectedDinner, setSelectedDinner] = useState();

  const getSavedRecipe = () => {
    const savedBreakfast = localStorage.getItem("selectedBreakfast");
    if (savedBreakfast) {
      setSelectedBreakfast(JSON.parse(savedBreakfast));
    }
    const savedLunch = localStorage.getItem("selectedLunch");
    if (savedLunch) {
      setSelectedLunch(JSON.parse(savedLunch));
    }
    const savedDinner = localStorage.getItem("selectedDinner");
    if (savedDinner) {
      setSelectedDinner(JSON.parse(savedDinner));
    }
  };

  useEffect(() => {
    getSavedRecipe();
  }, []);
  return (
    <>
      <div className="col-12 row mb-3">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <img src={breakfast} alt="breakfast" className="icon-img " loading="lazy"/>
          </div>
          <div className="col-8 type-food">
            <h6>Breakfast</h6> <span>08:00 AM</span>
          </div>
        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <img src={fire} alt="breakfast" className="icon-fire " loading="lazy"/>
          </div>
          <div className="col-8 type-food">&nbsp; {selectedBreakfast?.kal } kal</div>
        </div>
      </div>
      <div className="col-12 row mb-3">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <img src={launch} alt="launch" className="icon-img" loading="lazy"/>
          </div>
          <div className="col-8 type-food">
            <h6>Launch</h6> <span>03:00 PM</span>
          </div>        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <img src={fire} alt="breakfast" className="icon-fire " loading="lazy"/>
          </div>
          <div className="col-8 type-food">&nbsp; {selectedLunch?.kal } kal</div>
        </div>
      </div>
      <div className="col-12 row mb-3">
        <div className="col-8 row p-0">
          <div className="col-2 icon-food">
            <img src={dinner} alt="dinner" className="icon-img " loading="lazy"/>
          </div>
          <div className="col-8 type-food">
            <h6>Dinner</h6> <span>09:00 PM</span>
          </div>        </div>
        <div className="col-4 row p-0">
          <div className="col-2 icon-food">
            <img src={fire} alt="breakfast" className="icon-fire " loading="lazy"/>
          </div>
          <div className="col-8 type-food ">&nbsp; {selectedDinner?.kal } kal</div>
        </div>
      </div>
    </>
  );
};

export default TodayReport;
