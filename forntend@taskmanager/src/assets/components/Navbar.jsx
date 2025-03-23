import React from 'react'
import '../styles/Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav className='nav-bar'>
        <h1>PROGRESS TRACKER</h1>
        <li>
            <div>
                Dashboard
            </div>
        </li>
        <li>
            <div>
                Tasks
            </div>
        </li>
        <li>
            <div>
                Reports
            </div>
        </li>
    </nav>
    </>

  );
}

export default Navbar
