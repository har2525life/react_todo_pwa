import React, { useContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../servise/firebaseConfig';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {

    const { currentUser } = useContext(AuthContext)

    const handleClick = () => {

        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(() => {
                console.log('success')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const logOut = () => {
        auth.signOut()
    }

    return (
        <header>
            {
                currentUser ? (
                    <button onClick={logOut}>ログアウト</button>
                ) : (
                    <button onClick={handleClick}>ログイン</button>
                )
            }
        </header>
    )
}

export default Header