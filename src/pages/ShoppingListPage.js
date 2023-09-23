import Checklist from '../CheckList';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const ShoppingListPage = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 // Function to toggle the mobile menu state
 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <div className="shoppingpage">
   <div className="top-ham">
    <div className="menu-container">
     <div className="menu-icon" onClick={toggleMobileMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
     </div>
     <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
      <ul className="mobile-menu">
       {/* Render mobile menu links here */}
       <li>
        <NavLink to="/" exact activeClassName="active">
         <img src="/images/home icon.svg" alt="shopping list icon" />
         Home
        </NavLink>
       </li>
       <li>
        <NavLink to="/shoppinglist" activeClassName="active">
         <img src="/images/shopping list icon.svg" alt="shopping list icon" />
         Shopping List
        </NavLink>
       </li>
       <li>
        <NavLink to="/savedrecipe" activeClassName="active">
         <img src="/images/saved icon.svg" alt="saved icon" />
         Saved Recipe
        </NavLink>
       </li>
       <li>
        <NavLink to="/surprise" activeClassName="active">
         <img src="/images/surprise icon.svg" alt="surprise icon" />
         Surprise Me
        </NavLink>
       </li>
       <li>
        <NavLink to="/recipes" activeClassName="active">
         <img src="/images/recipe icon.svg" alt="recipe icon" />
         Recipes
        </NavLink>
       </li>
      </ul>
     </div>
    </div>
    <p>Hi, <b>Vincen Alfianto</b></p>
   </div>
   <div className="top">
    <p>Hi, <b>Vincen Alfianto</b></p>
   </div>
   <div className="shoppingcontainer">
    <h1>My Shopping List</h1>

    <Checklist />
   </div>

  </div>
 );
}

export default ShoppingListPage;