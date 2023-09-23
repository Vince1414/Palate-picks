import MyCarousel from '../MyCarousel';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const HomePage = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 // Function to toggle the mobile menu state
 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };
 return (
  <div className="home">
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
    <p>Hi, <b>There</b></p>
   </div>
   <div className="top">
    <p>Hi, <b>There</b></p>
   </div>

   <h1>Recipe for you</h1>
   <MyCarousel />

   <h1>Categories</h1>
   <div className="categorieswrapper">
    <div className="row">
     <button>Rice Dishes</button>
     <button>Noodles</button>
     <button>Salads</button>
    </div>

    <div className="row">
     <button>Baked Dishes</button>
     <button>Keto</button>
     <button>Snacks</button>
    </div>

    <div className="row">
     <button>Sweets</button>
     <button>Vegetarian</button>
     <button>Side Dishes</button>
    </div>
    {/*for mobile version*/}
    <div className="row-mobile">
     <button>Rice Dishes</button>
     <button>Noodles</button>
     <button>Salads</button>
     <button>Baked Dishes</button>
     <button>Keto</button>
     <button>Snacks</button>
     <button>Sweets</button>
     <button>Vegetarian</button>
     <button>Side Dishes</button>
    </div>

   </div>
  </div>
 );
}

export default HomePage;