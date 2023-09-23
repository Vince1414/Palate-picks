import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const SavedRecipePage = () => {
 // Access savedRecipes from location state
 const location = useLocation();
 const { savedRecipes } = location.state || { savedRecipes: [] };

 // Function to delete a saved recipe
 const navigate = useNavigate();
 const deleteRecipe = (id) => {
  const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id);
  // Update the URL with the new savedRecipes after deletion
  navigate({ state: { savedRecipes: updatedRecipes } });
 };

 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 // Function to toggle the mobile menu state
 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <div className="savedrecipepage">
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
    <p>
     Hi, <b>Vincen Alfianto</b>
    </p>
   </div>
   <div className="saved">
    <h1>Saved Recipe</h1>
    <h4>Add recipes from Recipes page.</h4>
    <div className="savedrecipe">
     {savedRecipes.map((recipe) => (
      <div className="savedcard" key={recipe.id}>
       <div className="headingcontainer">
        <h2>{recipe.title}</h2>
        <Link onClick={() => deleteRecipe(recipe.id)}>
         <img src="/images/Delete Icon.svg" alt="Delete Icon" />
        </Link>
       </div>
       <div className="descriptioncon">
        <div className="description">
         <h4>Description</h4>
         <p>{recipe.description}</p>
         <a href="/">Read More</a>
         <div className="add">
          <button >Add to shopping list</button>
         </div>
        </div>
        <img src={recipe.imageUrl} alt="Dish" />
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default SavedRecipePage;
