import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Recipe from './components/Recipe'

const App = () => {

  const [search, setSearch] = useState('')
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'http://localhost:5000/recipes'
      );
      console.log(response.data)
      setRecipes(response.data)
    };

    fetchData();
  }, []);

  return (
    <div>
      <TextField onChange={(e) => setSearch(e.target.value)}/>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        {recipes.map(recipe => <Recipe key={recipe.name} props={recipe}/>)}
      </div>
    </div>
  );
}

export default App;
