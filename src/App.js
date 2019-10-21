import React from 'react';
import './App.css';
import {LoremIpsum} from "lorem-ipsum";
import { truncate } from 'fs';
// lorem.generateWords(1);
//lorem.generateSentences(5);
//lorem.generateParagraphs(7);

const list = [
  {
    objectID: 0,
    recipeName: "Doro Wat",
    description: "Made only for certain occations",
    url: "https://amboethiopiancuisine.files.wordpress.com/2011/06/013011-035.jpg?w=1800&h=720&crop=1)"
  },
  {
    objectID: 1,
    recipeName: "Shiro",
    description: "Daily blessed feast",
    url: "https://www.wassethiopianrestaurant.com/images/10-promo-slides/Shiro-Wat.jpg",
  }
]

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
})

class App extends React.Component {
  
  render(){
    return(
      <div className="container">
        <Menu />
        <Home 
        />
        <Footer />
      </div>
    );
  }
}
function Menu (){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Recipe Magazine</a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li>
              <a  href="#">Home</a>
            </li>
          </ul>
        </div>
    </nav>
  )
}

function Footer() {
  return(
    <div className="footer-copyright text-center bg-light py-3">© 2019 Copyright:
      <a href="https://github.com/Bherekhet"> Bereket Degefa</a>
    </div>
  )
}

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      list,
      clicked: false,
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

    onRecipeClick(id){
      {console.log(id)}
      this.setState({
        clicked: true
      });
    }
  
  render(){
    const {list, clicked} = this.state;
    if (clicked){
      return <Recipe recipeID={this.id}/>
    } 
    return( 
      <div className="home">
        <div className="mainContent">
          {lorem.generateParagraphs(3)}
        </div>
          { list.map(item => 
            <div className="card" key={item.objectID}>
              
              <a href="#" onClick={() => this.onRecipeClick(item.objectID)}>
              <img className="card-img-top" src={item.url} alt={item.recipeName}/>
              </a>
              <div className="card-body">
                <h5 className="card-title">{item.recipeName}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
            )}
      </div>
    );
  }
}

class Recipe extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      recipeID: ''
    }
  }
  render(){
    return(
      <div>
        <div className="recipeDetail">
          <p className="recipeTitle">Doro Wat</p>
          <img className="rounded mx-auto d-block" style={{width: '50%'}} src="https://amboethiopiancuisine.files.wordpress.com/2011/06/013011-035.jpg?w=1800&h=720&crop=1)"></img>
          <p className="detail">{lorem.generateSentences(8)}</p>
          <p className="recipeTitle">What you will need to make the dish</p>
          <ul>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
            <li>{lorem.generateSentences(1)}</li>
          </ul>
          
        </div>
      </div>
      
    )
  }
}

export default App;
