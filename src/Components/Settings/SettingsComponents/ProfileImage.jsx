// Hooks
import { useState, useEffect } from "react";
import { useAuth } from "../../../Context/AuthContext";
// style
import "./style.css";
// firebase/storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../../../firebase";

const ProfileImage = () => {
  const { currentUserData } = useAuth();
  const [userImg, setUserImg] = useState(null);
  const [currentUserImage, setCurrentUserImage] = useState("")

  const uploadImage = (event) => {
    setUserImg(event.target.files[0]);
    const imageRef = ref(storage, `usersImages/${currentUserData?.userId}`);
    uploadBytes(imageRef, userImg).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setCurrentUserImage(url);
        console.log("🚀 ~ file: ProfileImage.jsx:24 ~ getDownloadURL ~ upladed:", url)
      })
    })
  };

  const getImageFromFirebase = (imageUrl) => {
    getDownloadURL(ref(storage, imageUrl))
      .then((url) => {
        setCurrentUserImage(url);
      })
  }

  useEffect(() => {
    const userImageRef = ref(storage, `usersImages/${currentUserData?.userId}`);
    if (userImageRef) {
      getDownloadURL(userImageRef)
        .then((url) => {
          setCurrentUserImage(url);
        })
        .catch((error) => {
          if (currentUserData?.gender === 'female') {
            getImageFromFirebase(`usersImages/avatar-female.webp`);
          } else {
            getImageFromFirebase(`usersImages/avatar-male.webp`);
          }
        });
    }
  }, [currentUserData]);


  return (
    <>
      <div className="profile-pic">
        <label className="label" htmlFor="file">
          <span className="glyphicon glyphicon-camera"></span>
          <span className="image-txt">Change</span>
        </label>
        <input id="file" type="file" onChange={uploadImage} />
        <img src={ currentUserImage } id="output" alt="Profile" loading="lazy" />
      </div>
    </>
  );
};

export default ProfileImage;
