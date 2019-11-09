import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../components/home/home.css';
//travisCi.mount

function Menu (){
    return (
      <nav id="navColor" className="navbar navbar-expand-md navbar-dark ">
        <a className="navbar-brand" href="#/home">Recipe Magazine</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recipes">Recipes</a>
              </li>
            </ul>
          </div>
      </nav>
    )
  }

export default Menu;