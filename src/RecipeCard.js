import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
 return (
  <div className="recipe-card">
   <Link to='/'>
    <img src={recipe.imageUrl} alt={recipe.title} />
   </Link>
   <h2>{recipe.title}</h2>
  </div>
 );
};

export default RecipeCard;