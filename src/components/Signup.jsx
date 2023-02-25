// import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = await axios.post("https://recipe-97wo.onrender.com/signup", data);
    console.log(newUser);

    // if(newUser.data.status==="success")
    // {
    //     alert("Signup successfull")
    //     navigate("/")
    // }
    // else{
    //     alert("Something went wrong")
    // }

    if (newUser.message) {
      return alert(newUser.message)
    }
    alert("Signup successfull");
    navigate("/");

    // window.localStorage.setItem("id",data.user._id);
    // window.localStorage.setItem("email",data.user.email);
    // window.localStorage.setItem("id",data.user._id);

    // useEffect(()=>{
    //     if()
    // })
  };
  return (
    <>
      <h1>SIGN UP</h1>
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />{" "}
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />{" "}
      <br />
      <label htmlFor="confirmPassword">Confirm Password</label>
      <br />
      <input
        type="text"
        placeholder="Confirm Password"
        onChange={(e) => {
          setData({ ...data, confirmpassword: e.target.value });
        }}
      />{" "}
      <br />
      <button onClick={handleSignup}>Continue</button>
      <Link to={"/"}>Signin</Link>
    </>
  );
};
export default Signup;
