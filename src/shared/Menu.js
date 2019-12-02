import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../components/home/Home.css';
import {Link} from "react-router-dom";

export default function Menu (){
    return (
      <div>
          <nav id="navColor" className="navbar navbar-expand-md navbar-dark ">
            <a className="navbar-brand" href="#" >Recipe Magazine</a>
             <ul className="navbar-nav">
               <li className="nav-item">
                 <a className="nav-link"  href="#">Home</a>
               </li>
                <li className="nav-item">
                 <a className="nav-link" href="#">Recipes</a>
                </li>
             </ul>
          </nav>
      </div>
    )
  }