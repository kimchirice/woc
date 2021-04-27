import React from "react";
import { useState } from "react";

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
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button block type="submit" disabled={!validateForm()}></button>
            </form>
        </div>
     );
}
 
export default Log;