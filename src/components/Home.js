import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import axios from "axios";
import Recipe from "./Recipe";
import AddRecipeButton from "./AddRecipeButton";

const Home = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:5000/recipes");
      setRecipes(
        response.data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => item)
      );
    };

    fetchData();
  }, []);

  const handleChange = (props) => {
    setSearch(props.target.value);
  };

  return (
    <div>
      <TextField
        placeholder="Etsi reseptejä"
        onChange={(e) => handleChange(e)}
        inputProps={{ style: { textAlign: "center" } }}
        style={{ display: "flex" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: 30,
        }}
      >
        {recipes
          .filter((recipe) =>
            recipe.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((recipe) => (
            <Recipe key={recipe.name} props={recipe} />
          ))}
      </div>
      <AddRecipeButton />
    </div>
  );
};

export default Home;
