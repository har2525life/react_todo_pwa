import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../servise/firebaseConfig';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser)
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider