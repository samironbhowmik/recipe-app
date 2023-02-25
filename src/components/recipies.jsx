import React, { useEffect, useState } from "react";
import axios from "axios";

const Recipe = ()=>{

    const title = window.localStorage.getItem("title")
    useEffect(()=>{
        getData()
    },[])

    const [data,setData] = useState()

    const getData = async()=>{
        const data = await axios.get(`https://recipe-97wo.onrender.com/search/${title}`)
        setData(data.data.list)
    }
    return(
        <>
            <header>
                <div className="get-recipe">
                    {data?.map((recipies,id)=>{
                        return(
                            <>
                                <div>{recipies.title}</div>
                                <div>{recipies.author}</div>
                                <div>{recipies.ingredients}</div>
                                <div>{recipies.directions}</div>
                            </>
                        )
                    })}
                </div>
            </header>
        
        </>
    )
}

export default Recipe