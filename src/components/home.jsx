import React from "react";
import { Link } from "react-router-dom";
import Recipe from "./recipies";
const Home = () => {
  return (
    <>
      <div className="logo">
        <h3>Recipe App</h3>
      </div>

      <div className="logout">
        <button>Logout</button>
      </div>

      <input type="text" placeholder="Search" />
      <Link to={"/RecipeForm"}>New</Link>

      <h4>All Recipies</h4>
      <Recipe/>
    </>
  );
};

export default Home;
