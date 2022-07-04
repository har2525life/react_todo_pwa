import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../servise/firebaseConfig';

const Header = () => {

    const handleClick = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then(() => {
                console.log('success')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <header>
            ヘッダー
            <button onClick={handleClick}>ログイン</button>
        </header>
    )
}

export default Header