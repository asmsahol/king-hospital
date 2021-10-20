/** @format */

import { useEffect, useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication();

const useFirebase = () => {
  const [isLodding, setIsLodding] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLodding(true);
    signInWithPopup(auth, googleProvider)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLodding(false));
  };
  const logOut = () => {
    setIsLodding(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLodding(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
      setIsLodding(false);
    });
  }, [auth]);

  const hundleRegistration = e => {
    e.preventDefault();
    user?.email
      ? processLogin(email, password)
      : createNewUser(email, password);
  };
  const hundleEmailChange = e => {
    setEmail(e.target.value);
  };
  const hundlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        verifyEmail();
      })
      .catch(error => {
        setError(error.message);
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
  };
  return {
    user,
    error,
    logOut,
    signInWithGoogle,
    hundleRegistration,
    hundleEmailChange,
    hundlePasswordChange,
    processLogin,
    createNewUser,
    verifyEmail,
    isLodding,
  };
};

export default useFirebase;
