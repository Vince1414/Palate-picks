import { recipesData } from '../RecipesData';
import RecipeCard from '../RecipeCard';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const SurpriseMePage = () => {
 const [randomRecipe, setRandomRecipe] = useState(null);

 const generateRandomRecipe = () => {
  // Get a random recipe from the recipesData array
  const randomRecipe = recipesData[Math.floor(Math.random() * recipesData.length)];

  setRandomRecipe(randomRecipe);
 };

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 // Function to toggle the mobile menu state
 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <div className="recipepage">
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
   <div className="generate">
    <h1>This is the Surprise Me Page!</h1>
    <p>Welcome to Palate Picks,
     your culinary companion for effortless and inspired cooking!<br></br>
     Our platform is designed to make your cooking journey delightful
     and stress-free. <br></br>With our innovative recipe recommendation system
     we take the guesswork out of meal planning.
     <br></br>Whether you're an experienced chef looking to try something new
     or a beginner seeking simple <br></br>yet delicious recipes, we've got you covered.</p>
    <button onClick={generateRandomRecipe}>Generate</button>
   </div>

   {randomRecipe && <RecipeCard recipe={randomRecipe} />}

  </div>
 );
}

export default SurpriseMePage;
