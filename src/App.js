import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = 'b4520668';
  const APP_KEY = '1afd1d8b7e1b717bf129520eec58392c';

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <SearchForm updateQuery={setQuery} />
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
