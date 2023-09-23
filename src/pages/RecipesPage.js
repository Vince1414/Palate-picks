import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { recipesData } from '../RecipesData';

const RecipesPage = () => {

 // Use the useNavigate hook for navigation
 const navigate = useNavigate();

 // State to manage saved recipes
 const [savedRecipes, setSavedRecipes] = useState([]);

 // Function to save a recipe
 const saveRecipe = (recipe) => {
  let updatedRecipes;

  if (!savedRecipes.some((r) => r.id === recipe.id)) {
   updatedRecipes = [...savedRecipes, recipe];
   setSavedRecipes(updatedRecipes);
  } else {
   updatedRecipes = savedRecipes;
  }

  // Navigate to the SavedRecipePage with the updated recipes
  navigate('/savedrecipe', { state: { savedRecipes: updatedRecipes } });
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
    <p>
     Hi, <b>Vincen Alfianto</b>
    </p>
   </div>
   <div className="collection">
    <h1>Recipes Collection</h1>
    <div className="recipescollection">
     {recipesData.map((recipe) => (
      <div className="recipecon" key={recipe.id}>
       <div className="recipe01">
        <img src={recipe.imageUrl} alt={recipe.title} />
        <div className="description">
         <h3>{recipe.title}</h3>
         <h4>{recipe.category}</h4>
        </div>
        <div className="add">
         <button onClick={() => saveRecipe(recipe)}>Save Recipe</button>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default RecipesPage;
