import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom'




const Navbar = () => {
    return (
      <>
      <nav className="navbar">
        
        <div className="navbar-container">
          <Link to="/" className="link">
        <h1 className="logo">Home</h1>
        </Link>
          <ul className="nav-menu">
            <Link to="/search" style={{textDecoration : "none"}}>
            <li className="nav-items">Search Games</li>
            </Link>
           
           
          </ul>
        </div>
      </nav>
    </>
    )
}

export default Navbar
