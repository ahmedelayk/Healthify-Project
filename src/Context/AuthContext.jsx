// Hooks
import { createContext, useContext, useEffect, useState } from "react";
// Firebase
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, getDocs, getDoc, doc, setDoc } from "firebase/firestore";
import { storage } from "../firebase";
import { ref, getDownloadURL } from "firebase/storage"
// Localization i18next
import { useTranslation } from "react-i18next"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const {t, i18n} = useTranslation();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  const usersRef = collection(db, 'users');
  const [userImage, setUserImage] = useState("")

  // get all users from fire store
  const fetchAllUsers = async () => {
    const data = await getDocs(usersRef);
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users;
  }

  // fetch user data
  const fetchUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(usersRef, userId));
      if (userDoc.exists()) {
        // User data exists
        const userData = userDoc.data();
        return userData;
      } else {
        console.log('error finding user');
      }
    } catch (error) { console.log(error.message) }
  };


  const getImageFromFirebase = (imageUrl) => {
    getDownloadURL(ref(storage, imageUrl))
      .then((url) => {
        setUserImage(url);
      })
  }
  const getImage = () => {
    const userImageRef = ref(storage, `usersImages/${currentUserData?.userId}`);
    if (userImageRef) {
      getDownloadURL(userImageRef)
        .then((url) => {
          setUserImage(url);
        })
        .catch((error) => {
          if (currentUserData?.gender === 'female') {
            getImageFromFirebase(`usersImages/avatar-female.webp`);
          } else if (currentUserData?.gender === 'male') {
            getImageFromFirebase(`usersImages/avatar-male.webp`);
          }
        });
    }
  }

  useEffect(() => {
    console.log('context work');

    fetchAllUsers()
      .then((users) => setUsers(users))
      .catch((error) => console.log(error.message));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const userFetchedData = await fetchUserData(user.uid);
        // console.log(userFetchedData)
        setCurrentUserData({ ...userFetchedData });
      } else {
        setCurrentUser(null);
        setCurrentUserData(null);
      }
    })

    getImage();
    // Clean up the subscription when component unmounts
    return () => unsubscribe();
  }, [currentUserData?.gender]);

  // Authentication Operations (signup, login, logout)
  // Signup function
  const signup = (firstName, lastName, phoneNumber, gender, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        async (userCredential) => {
          const user = userCredential.user;
          await setDoc(doc(usersRef, user.uid), {
            userId: user.uid,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            gender: gender,
            email: email,
            password: password
          })
        }
      );
  };
  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Logout function
  const logout = () => {
    return signOut(auth);
  };
  const values = { signup, login, logout, currentUser, users, currentUserData, getImage, userImage, t, i18n };

  return <AuthContext.Provider value={ values }>{ children }</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}
