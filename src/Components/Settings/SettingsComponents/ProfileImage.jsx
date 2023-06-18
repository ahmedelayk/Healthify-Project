import React from "react";
import "./style.css";
import profile from "../../assets/images/profile.webp";

const ProfileImage = () => {
  const loadFile = (event) =>{
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <div className="profile-pic">
      <label className="label" htmlFor="file">
        <span className="glyphicon glyphicon-camera"></span>
        <span className="image-txt">Change</span>
      </label>
      <input id="file" type="file" onChange={loadFile} />
      <img src={profile} id="output" width="200" alt="Profile" loading="lazy"/>
    </div>
  );
};

export default ProfileImage;
