import React from "react";
import "./App.css";
import  NavBar  from "../pages/landing/NavBar";
import Landing from "../pages/landing/Landing";


function AppWrapper(){
    return(
        <div className="App">
          <NavBar/>
          <Landing/>
        </div>

    );
}

export default AppWrapper;
