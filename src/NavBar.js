import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
 return (
  <nav>

   <div className="logo">
    <Link to="/">
     <img src="/images/Logo.svg" alt="Logo" itemType="button"></img>
    </Link>
   </div>

   <div className="search-input">
    <input type="Search" placeholder="Search recipes" />
    <button>
     <img src="/images/Search icon.svg" alt="search icon" />
    </button>
   </div>

   <ul>
    <li>
     <NavLink to="/" exact activeClassName="active">
      <img src="/images/Home icon.svg" alt="home icon" />
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

   <div className="profileIcon">
    <img src="/images/Profile iconL.svg" alt="profile icon" />
    <p>Vincen Alfianto</p>
   </div>
  </nav>
 );
}

export default NavBar;