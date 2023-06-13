import React from "react";

const Lang = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }} data-aos="zoom-in-left">
      <select
        className="selectpicker"
        style={{ flexGrow: 1, padding: "7px", width: "100%", boxSizing: "border-box" }}
        data-width="fit"
      >
        <option
          data-content='<span className="flag-icon flag-icon-us"></span> English'
        >
          Arabic
        </option>
        <option
          data-content='<span className="flag-icon flag-icon-mx"></span> Español'
        >
          English
        </option>
      </select>
    </div>
  );
};

export default Lang;
