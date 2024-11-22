import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  // Create user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };


//   Login user
const loginUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

//   logout user
const logOut = () =>{
    return signOut(auth);
}

  // Setup observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
