import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
const Signin = ()=>{

    const navigate = useNavigate()
    const [data,setData] = useState({email:"", password:""})
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const check = await axios.post("https://recipe-97wo.onrender.com/signin",data)
        if(check.data.status==="success")
        {
            sessionStorage.setItem("token",check.data.token)
            alert("Login Successfull!")
            navigate("/home")
        }
        
        navigate("/home")

    }
    return(
        <>
            <h1>SIGN IN</h1>

            <form action="">
            <label htmlFor="email">Email</label><br />
            <input type="text" placeholder=" Email" onChange={(e)=>{setData({...data,email:e.target.value})}}/> <br />

            <label htmlFor="password">Password</label><br />
            <input type="text" placeholder="Password" onChange={(e)=>{setData({...data,password:e.target.value})}}/> <br />

            <button onClick={handleSubmit}>Submit</button>

            <Link to={"/Signup"}>Signup</Link>

            </form>

        </>
    )
}

export default Signin;
