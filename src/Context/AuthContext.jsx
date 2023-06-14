import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, {  createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => { 
    const loggedIn = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  },[])
  const signup = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email,password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    signOut(auth);
  };
  const values = { signup, login, logout ,currentUser};

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
