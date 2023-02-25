import React from "react";
import {Link} from "react-router-dom"
const Signin = ()=>{
    return(
        <>
            <h1>SIGN IN</h1>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder=" Email" /> <br />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Password" /> <br />
            <Link to={"/Signup"}>Submit</Link>
        </>
    )
}

export default Signin;