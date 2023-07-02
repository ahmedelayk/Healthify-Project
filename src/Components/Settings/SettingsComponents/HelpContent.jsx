import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './style.css'
const HelpContent = () => {
  const [data, setData] = useState([]);
const {id}=useParams()
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://healthify-pei4.onrender.com/help/"+id);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
        <div className="item help-cont">
          <h2 className="text-center m-5">{data.header}</h2>
              <p className="m-2 help-des">{data.description}</p>
              <img src={data.poster} alt={data.header } className="help-poster"/>
        </div>
    </div>
  );
};

export default HelpContent;
