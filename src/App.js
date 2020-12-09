import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipe from './components/Recipe';
import Axios from 'axios';

function App() {
  const [search, setSearch] = useState("noodles");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "0fd4447d";
  const APP_KEY = "fff98df4f53068b3b1c69ad6e161beb1";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  const onSearchClick = () => {
    getRecipes();
  }

  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
      <Recipe recipes={recipes} />
      </div>
    </div>
  );
}

export default App;