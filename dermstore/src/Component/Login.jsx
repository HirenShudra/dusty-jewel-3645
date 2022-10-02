import '../App.css';
import React from "react";
 

export default function Login(){
    return (
    <div className="login">
        <div>
            <h1>Existing Customers</h1>
            <div><label><span>*</span>Email address <br /> <input type="email" /></label></div>
            <div><label><span>*</span>Password <br /> <input type="password" /></label></div>
            <div><button>Login</button></div>
        </div>
        <div>
            <h1>New Customers</h1>
            <button>CONTINUE</button>
        </div>
    </div>
    
    )
}