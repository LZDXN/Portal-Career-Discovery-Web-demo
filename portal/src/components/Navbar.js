import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/">Explore</a>
        <a href="/">Profile</a>
        <a href="/">Job</a>
        <a href="/">About</a>
        {/* Other navigation links here */}
      </div>
      <div className="nav-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {/* <button type="submit">Sign In</button> */}
        <button type="submit">Register</button>
        {/* Or a 'Register' button as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
