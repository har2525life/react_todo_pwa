import React, { useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom'
import Header from '../components/Header'

const MemoScreen = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            <Header />
            {
                !currentUser ? (
                    <Navigate to={`/login/`} />
                ) : (
                    <p>test</p>
                )

            }
        </div>
    )
}

export default MemoScreen