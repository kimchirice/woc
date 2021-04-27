import React from "react";
import { useState } from "react";
import './login.css'


const Log = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function validateForm() {
        return email.length > 0 && password.length > 0
    };

    function handleSubmit(event){
        event.preventDefault();
    };

    return ( 
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="pablo@gmial.com" 
                    className="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input 
                    type="password" 
                    className="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button block type="submit" className="submit-button" disabled={!validateForm()}></button>
            </form>
        </div>
     );
}
 
export default Log;