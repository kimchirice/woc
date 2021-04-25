import React from 'react';
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../res/img/2.png'
import {NavItems} from "../landing/NavItems.jsx";
import "./NavBar.css";

class NavBar extends React.Component {
render(){
    return(
      <Nav className="NavItems">
        <img  className="logo-image" src={logo} alt="Women of Colour"></img>
        <div>
          <ul className="navbar-title">
            {NavItems.map( (item,index) => {
              return(
               <li  key={index}>
                 <a className={item.cName} href={item.url}>
                   {item.title}
                 </a>
               </li> 
              )
            })}
            
          </ul>
        </div>
      </Nav>
    )
}
};

export default NavBar;