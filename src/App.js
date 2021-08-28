import React, { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const APP_ID = 'b4520668';
  const APP_KEY = '1afd1d8b7e1b717bf129520eec58392c';

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
