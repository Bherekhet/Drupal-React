import React from 'react';

function Menu (){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">Recipe Magazine</a>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/recipes">Recipes</a>
              </li>
            </ul>
          </div>
      </nav>
    )
  }

export default Menu;