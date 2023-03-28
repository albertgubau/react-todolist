import {React, useState} from 'react'
import './Login.css'

const Login = ({handleLogin}) => {
    
    // Develop branch change
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
  
    return (
    <div className="login">
            
        <div className="loginForm">
            
            <h1 className="loginTitle">Login</h1>
            
            <form className="formLogin" onSubmit={(e) => {
                e.preventDefault();
                handleLogin(username, password)}}>
                
                    <input className="inpt" type="text" placeholder ='Write your username' onChange={(e)=>setUsername(e.target.value)}/>
        
                    <input className="inpt" type="password" placeholder ='Write your password' onChange={(e)=>setPassword(e.target.value)} />

                    <button className="login-btn">Login</button>
                
            </form>
        </div>

    </div>
  )
}

export default Login