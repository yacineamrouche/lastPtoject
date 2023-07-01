import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
import Search from './Search/Search.jsx'
 const Navbar = () => {
  return (
    <div className="navbar">
    
        <div>
        <Link to="/"> Products </Link>
        </div>
        <div>
        <Link to="/Add"> Add </Link>  
        </div> 
        <div>
         <Search/>
         
        </div>    
    </div>
  );
};

export default Navbar