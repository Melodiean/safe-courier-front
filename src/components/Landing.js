import React
// ,
//  { Component } 
from 'react';
// import "./App.css";
import { Link } from "react-router-dom";

import delivery from "../images/delivery.png"

export default function Landing(){

    return (
        <div className="land">
            <img src={delivery} alt="by Hany Alashkar from Pixabay" />
            <h3>Get your parcel safely and fast</h3>
            <p>With Safe Courier, you can make delivery orders and keep track of your parcel wherever you are!</p>
            <div>
                <Link to="register"><button>
                    SIGNUP</button></Link>
                <Link to="login"><button>LOGIN</button></Link>
                
            </div>
            
        </div>
    )
}

// console.log();