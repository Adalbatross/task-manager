import React from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
function Navbar({user}) {
  return (
    <>
    <nav className='nav-bar'>
        <h1>PROGRESS TRACKER</h1>
        <li>
            <div>
                <Link to="/dashboard">Dashboard</Link>
            </div>
        </li>
        <li>
            <div>
                <Link to = "/tasks">Tasks</Link>
            </div>
        </li>
        <li>
            <div>
                <Link to = "/reports">Reports</Link>
            </div>
        </li>
        <li className="auth-section">
        {user ? (
          <div className="profile">
            <img src={user.profileImage} alt="Profile" className="profile-img" />
            {/* <br></br>
            <span>{user.name}</span> */}
            
            <button onClick={() => window.location.reload()}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </li>
    </nav>
    </>

  );
}

export default Navbar
