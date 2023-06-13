import React, { useState } from "react";
import CountrySelect from "react-bootstrap-country-select";

const Country = () => {
  const [value, setValue] = useState(null);

  return (
    <div data-aos="zoom-in-right">
      <CountrySelect value={value} onChange={setValue} />
    </div>
  );
};

export default Country;
