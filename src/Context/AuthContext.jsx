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
import { collection, addDoc, onSnapshot } from "firebase/firestore"; 
import { useCallback } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  const usersRef = collection(db, 'users');
  useEffect(() => { 
    const loggedIn = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  },[]);
  // functions
  const getAllUsers = ()=>{
    try{
    let arrayOfUsers = [];
    onSnapshot(usersRef, (snapshot)=>{{
      snapshot.docs.forEach((user)=>{
        arrayOfUsers.push(user.data());
        // console.log(arrayOfUsers)
      })
      setUsers([...arrayOfUsers])
    }})}catch(error){
      console.log(error.message);
    }
  };
  const getCurrentUserData = (email)=>{
    try {
      // console.log('before loop');
      // console.log(currentUser);
      // console.log(users);
      users?.forEach((usr)=>{
        // console.log('before if condition');
        if(usr.email === email){
          // console.log('found: ', usr, currentUser);
          setCurrentUserData(usr);
        }
      })
    } catch (error) {
      console.log(error.message);
    }
  }
  // Authentication Operations (signup, login, logout)
  const signup = (firstName, lastName, phoneNumber, gender, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      async (result) => {
        // console.log(result)
        // console.log(result.user.email)
        await addDoc(usersRef, { 
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          gender: gender,
          email: email,
          password: password
         }).then((res) => {
          // console.log(res)
        });
      }
    );
    getAllUsers();
    getCurrentUserData(email);
  };
  const login = (email,password) => {
    signInWithEmailAndPassword(auth, email, password);
    getAllUsers();
    getCurrentUserData(email);
  };
  const logout = () => {
    signOut(auth);
  };
  const values = { signup, login, logout ,currentUser, users};

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
