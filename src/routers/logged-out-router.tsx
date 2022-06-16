import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Account from '../pages/create-account'
import Login from '../pages/login'




export const LoggedOutRouter = () => {
    
  
    return (
        <Router>
            <Routes>
            <Route path="/create-account" element={<Account />}/>
            <Route path="/" element={<Login />}/>
            </Routes>   
        </Router>
    )
}