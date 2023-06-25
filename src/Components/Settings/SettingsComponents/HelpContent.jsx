import React, { useEffect, useState } from "react";
import axios from "axios";

const HelpContent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3002/help");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="item">
          <h2>{item.header}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HelpContent;
