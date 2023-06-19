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
import { collection, addDoc, getDocs, getDoc, doc, setDoc } from "firebase/firestore"; 

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  const usersRef = collection(db, 'users');

  // get all users from fire store
  const fetchAllUsers = async() => {
    const data = await getDocs(usersRef);
    const users = data.docs.map((doc)=>({...doc.data(), id: doc.id}));
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
        // console.log(userData);
      } else {
        // User data does not exist
        console.log('error finding user');
      }
    } catch (error) { console.log(error.message) }
  };

      
  useEffect(() => {
    console.log('context work');
    
    fetchAllUsers()
    .then((users) => setUsers(users))
    .catch((error)=> console.log(error.message));

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if(user){
        setCurrentUser(user);
        const userFetchedData = await fetchUserData(user.uid);
        // console.log(userFetchedData)
        setCurrentUserData({...userFetchedData});
      }else {
        setCurrentUser(null);
        setCurrentUserData(null);
      }
    })

  // Clean up the subscription when component unmounts
  // return () => unsubscribe();
  },[]);

  // Authentication Operations (signup, login, logout)
  // Signup function
  const signup = (firstName, lastName, phoneNumber, gender, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(
      async(userCredential) => {
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
  const login = (email,password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  // Logout function
  const logout = () => {
    signOut(auth);
  };
  const values = { signup, login, logout ,currentUser, users, currentUserData };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
}












// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { addDoc, collection } from "firebase/firestore";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   const signup = (email, password, uName) => {
//     createUserWithEmailAndPassword(auth, email, password).then(
//       async (result) => {
//         await addDoc(collection(db, "userInfo"), { uName }).then((res) => {});
//       }
//     );
//   };
//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const logout = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   const values = { currentUser, signup, logout, login };
//   return (
//     <AuthContext.Provider value={values}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
