import React, { useState} from 'react'
import './LoginContainer.css'
import {useHistory} from "react-router-dom"
import { auth } from "./firebase" 

function LoginContainer() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => alert(error.message))
        //firebase

    }
    const Register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
        //firebase

    }
    
    return (
        <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} 
                    onChange={e => setEmail(e.target.value) }/>
                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value) } />
                    <button onClick={signIn} className='login_signInButton'>Sign-In</button>
                    <button onClick={Register} className='login_registerButton'>Create A New Account</button>
                </form>
            </div>
            
        
    )
}

export default LoginContainer
