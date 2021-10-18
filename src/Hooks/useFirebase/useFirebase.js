import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const loginUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage);
            })
    }

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    return { user, error, loginUsingGoogle, logout }
};

export default useFirebase;