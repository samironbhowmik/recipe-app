// import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const RecipeForm = () => {

    const navigate = useNavigate()
    const [data,setData] = useState({
        recipe_title:"",
        author:"",
        ingredients:"",
        directions:""
    })
    const handleClick= async(e)=>{
        e.preventDefault()

        // const result = await axios.post("http://localhost5000/recipies",data)
        // console.log(result);

        // if(result.message)
        // {
        //     return alert(result.message)
        // }
        // navigate("/home")

        navigate("/home",{state:{data:data}})
    }
  return (
    <>
      <div className="logo">
        <Link to={"/home"}>
        <h3>Recipe App</h3>
        </Link>
        
      </div>

      <h1>Create a Recipe</h1>
      <p>Share a recipe with the club by completeing the form below!</p>

      <label htmlFor="">Recipe title</label> <br />
      <input type="text" onChange={(e)=>{setData({...data,recipe_title:e.target.value})}}/> <br />

      <label htmlFor="">Author</label>
      <br />
      <input type="text" onChange={(e)=>{setData({...data,author:e.target.value})}}/> <br />

      {/* <label htmlFor="">Please upload your image or paste URL link</label>
      <br />
      <input type="text" onChange={(e)=>{setData({...data,image:e.target.value})}}/> <br /> */}

      <label htmlFor="">Ingredients</label>
      <br />
      <input type="text" onChange={(e)=>{setData({...data,ingredients:e.target.value})}}/> <br />

      <label htmlFor="">Recipe directions</label>
      <br />
      <input type="text" onChange={(e)=>{setData({...data,directions:e.target.value})}}/> <br />

      <button onClick={handleClick}>Add Recipe</button>
    </>
  );
};

export default RecipeForm;
