import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SavedRecipes from './pages/SavedRecipes';
import CreateRecipe from './pages/CreateRecipe';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-recipe" element={<CreateRecipe />}/>
          <Route path="/saved-recipes" element={<SavedRecipes />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
