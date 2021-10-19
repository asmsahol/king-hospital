/** @format */

import { useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("inside state change", user);
        setUser(user);
      }
    });
  }, [auth]);

  return {
    user,
    error,
    logOut,
    signInWithGoogle,
  };
};

export default useFirebase;
