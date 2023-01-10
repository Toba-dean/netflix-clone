import { useEffect, useState, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { FirebaseContext } from "../context/firebaseContext";


export const useAuthListener = () => {

  const { firebase } = useContext(FirebaseContext)
  const auth = getAuth(firebase);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userAuth')))

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        localStorage.setItem('userAuth', JSON.stringify(userAuth));
        setUser(userAuth);
      } else {
        localStorage.removeItem('userAuth');
        setUser(null);
      }
    })
    return () => listener();
  }, [auth])

  return { user };
}
