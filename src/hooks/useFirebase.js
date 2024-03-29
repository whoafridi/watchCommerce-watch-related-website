import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";
import swal from "sweetalert";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const registerUser = (email, password, name, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save to database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace("/");
        swal("Registered successfully!!", "done", "success", {
          button: false,
          timer: 1300,
        });
      })
      .catch((error) => {
        console.log(error.message);
        swal({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const loginUser = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        swal("You login successfully!!", email, "success", {
          button: false,
          timer: 1300,
        });
      })
      .catch((error) => {
        swal("Your email/password maybe incorrect!", {
          icon: "error",
          button: false,
          timer: 1300,
        });
      });
  };

  const signInUsingGoogle = (location, history) => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");

        const destination = location?.state?.from || "/";
        history.replace(destination);

        swal(`You login successfully!!`, user.email, "success", {
          button: false,
          timer: 1300,
        });
      })
      .catch((error) => {
        swal({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  // add admin
  useEffect(() => {
    fetch(`https://watch-commerce.vercel.app/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  // save user into datbase
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://watch-commerce.vercel.app/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        console.log("response: ", res);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  return {
    user,
    admin,
    signInUsingGoogle,
    registerUser,
    loginUser,
    logOut,
  };
};

export default useFirebase;
