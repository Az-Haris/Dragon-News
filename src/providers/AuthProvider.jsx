import { useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.init'


const AuthProvider = ({ children }) => {

    const auth = getAuth(app)

    const [user, setUser] = useState(null)

    // Create user 
    const createNewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Setup observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[auth])

    const authInfo = {
        user, 
        setUser,
        createNewUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;