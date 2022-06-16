import React from 'react'
import { isLoggedInVar } from '../apollo'

export const LoggedInRouter = () =>{
    const onClick = () =>{
        isLoggedInVar(false)
    }
    return (
        <div>
            <h1>LoggedIn</h1>
            <button onClick = {onClick}>Click to logout</button>
        </div>
    )
}