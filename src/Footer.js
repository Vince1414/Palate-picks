import { Link } from "react-router-dom";

const Footer = () => {
 return (
  <footer>
   <Link to="/">
    <img className="logofooter" src="/images/LogoFooter.svg" alt="LogoFooter" itemType="button"></img>
   </Link>

   <ul>
    <li>
     <Link to="/">Home</Link>
    </li>
    <li>
     <Link to="/shoppinglist">Shopping List</Link>
    </li>
    <li>
     <Link to="/savedrecipe">Saved Recipe</Link>
    </li>
    <li>
     <Link to="/surprise">Surprise Me</Link>
    </li>
   </ul>

   <ul>
    <li>
     <Link to="/recipes">Recipes Collection</Link>
    </li>
   </ul>

  </footer>
 );
}

export default Footer;