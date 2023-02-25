import React from "react";
import { Link } from "react-router-dom";
const Signup=()=>{
    return(
        <>
            <h1>SIGN UP</h1>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" /> <br />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Password" /> <br />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="text" placeholder="Confirm Password"/> <br />
            <Link to={"/"}>Continue</Link>
        </>
    )
}
export default Signup;