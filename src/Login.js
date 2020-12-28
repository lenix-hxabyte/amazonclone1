import React from 'react'
import "./Login.css"
import { Link } from "react-router-dom"



function Login() {
    return (
        <div className="login">
            <Link to="/">
             <img 
            className="header_logo"
            src="hexabyte2.jpg"
            alt=""
            />
            </Link>
            
        </div>
    )
}

export default Login
