import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

      return  signInWithPopup(auth, googleProvider)
           
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])
    
    // updae user name
    const updateName= (name)=> {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          const newUser={...user, displayName: name} // recommend
         setUser(newUser)
          
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }


    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        signInUsingGoogle,
        updateName,
        logOut
    }
}

export default useFirebase;