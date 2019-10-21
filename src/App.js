import React from 'react';
import './App.css';
import {LoremIpsum} from "lorem-ipsum";
// lorem.generateWords(1);
//lorem.generateSentences(5);
//lorem.generateParagraphs(7);

const url = "http://gtest.dev.wwbtc.com/json/rec";
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

// const list = [
//   {
//     objectID: 0,
//     recipeName: "Doro Wat",
//     description: "Made only for certain occations",
//     url: "https://amboethiopiancuisine.files.wordpress.com/2011/06/013011-035.jpg?w=1800&h=720&crop=1)",
//     detail: lorem.generateSentences(5),
//     need: lorem.generateWords(3)
//   },
//   {
//     objectID: 1,
//     recipeName: "Shiro",
//     description: "Daily blessed feast",
//     url: "https://www.wassethiopianrestaurant.com/images/10-promo-slides/Shiro-Wat.jpg",
//     detail: lorem.generateSentences(5),
//     need: lorem.generateWords(3)  
//   }
// ]



class App extends React.Component {
  render(){
    return(
      <div className="container">
        <Menu />
        <Home />
        <Footer />
      </div>
    );
  }
}
function Menu (){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/home">Recipe Magazine</a>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./recipes">Recipes</a>
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
      list:null,
      clicked: false,
      id:'',
      data: []
    };
    this.onRecipeClick = this.onRecipeClick.bind(this);
    // this.listOfRecipes = this.listOfRecipes.bind(this);
  }

  onRecipeClick(id){
    this.setState({
      clicked: true,
      id: id,
    });
  }

  componentDidMount(){
    fetch("http://gtest.dev.wwbtc.com/json/rec/").then(response=> {
      //console.log(response);
      return response.json();
    }).then(data => {
      this.setState({list: data})
      console.log(data);
    }).catch(err => {
      console.log("Error Reading data "+ err);
    })

  }
    
  render(){

    const {list, clicked} = this.state;
    if (!list) {
      return null;
    }
    if (clicked){
      return <Recipe recipeID={this.state.id} recipeList={list}/>
    } 
    return( 
      <div className="home">
        <div className="mainContent">
          {lorem.generateParagraphs(3)}
        </div>
          { list.map((item, key) => 
            <div className="card" key={key}>
              {console.log(item.view_node)}
              <a href="#" onClick={() => this.onRecipeClick(item.objectID)}>
              <img className="card-img-top" src={item.field_images} alt={item.title}/>
              </a>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
            )}
      </div>
    );
  }
}

class Recipe extends React.Component {

  render(){
    console.log(this.props.recipeID);
    console.log(this.props.recipeList);
    return(
      <div>
          <p className="recipeTitle">Doro Wat</p>
          <div className="card" style={{width: '18rem'}}>
            <img className="rounded mx-auto d-block" style={{width: '80%'}} 
              src="https://amboethiopiancuisine.files.wordpress.com/2011/06/013011-035.jpg?w=1800&h=720&crop=1)">
              </img>
            <div className="card-body">
              <button style={{width: "100px"}} className="btn btn-primary previous">Previous</button>
              <button style={{width: "100px"}} className="btn btn-primary next">Next</button>
            </div>
          </div>
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
    )
  }
}

export default App;
