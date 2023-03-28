import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({logged, currentUser}) => {
  return (
    <nav className="nav">
        
        {logged?
        <>
          <p className="username">Logged as {currentUser.username}</p>
        </>
        :
        <>
          <Link to ="/todo"><button className="nav-btn">List</button></Link>
          <Link to ="/login"><button className="nav-btn">Login</button></Link>
        </>}
    </nav>
  )
}

export default NavBar