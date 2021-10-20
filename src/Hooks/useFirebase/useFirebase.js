import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const loginUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUsingFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => setIsLoading(false));
    }

    const handleRegistration = e => {
        setIsLoading(true);
        console.log("clicked");
        e.preventDefault();
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => setIsLoading(false));
    }
    const handleLogin = (e) => {
        setIsLoading(true);
        // e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            // .then(result => {
            //     setUser(result.user)
            //     console.log(result.user);
            // })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => setIsLoading(false));
    }

    const getName = e => {
        setName(e?.target?.value)
        console.log(e?.target?.value)
    }
    const getEmail = e => {
        setEmail(e?.target?.value)
        console.log(e.target.value)
    }
    const getPassword = e => {
        setPassword(e?.target?.value)
        console.log(e.target.value)
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [auth])

    return { user, error, isLoading, name, setIsLoading, loginUsingGoogle, loginUsingFacebook, getName, getEmail, getPassword, handleRegistration, handleLogin, logout }
};

export default useFirebase;