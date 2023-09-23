import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import Footer from './Footer';
import ShoppingListPage from './pages/ShoppingListPage';
import SavedRecipePage from './pages/SavedRecipePage';
import SurpriseMePage from './pages/SurpriseMePage';
import RecipesPage from './pages/RecipesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shoppinglist' element={<ShoppingListPage />} />
            <Route path='/savedrecipe' element={<SavedRecipePage />} />
            <Route path='/surprise' element={<SurpriseMePage />} />
            <Route path='/recipes' element={<RecipesPage />} />
          </Routes>
        </div>
        <Footer path='/' />
      </div>
    </BrowserRouter>
  );
}

export default App;
