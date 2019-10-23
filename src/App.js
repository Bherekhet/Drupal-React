import React from 'react';
import './App.css';
import lorem from './shared/Lorem-ipsum';
import Footer from './shared/Footer';
import Menu from './shared/Menu';

// function Control(){
//   fetch("http://gtest.dev.wwbtc.com/json/rec/").then(response=> 
//      // console.log('res'+response.json());
//       response.json())
//     .then(data => {
//       return data;
//     }).catch(err => {
//       this.console.log(err);
//     })
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {recipeList: [], }
    
    this.fetchRecipe = this.fetchRecipe.bind(this);
  }

  fetchRecipe(){
    fetch("http://gtest.dev.wwbtc.com/json/rec/").then(response=> {
      return response.json();
    }).then(data => {
      this.setState({recipeList: data});
    }).catch(err => {
      this.console.log(err);
    })
  }

  componentWillMount(){
    this.fetchRecipe();
  }

  render(){
    const {recipeList} = this.state;
    //console.log(recipeList);
    if (!recipeList){
      this.fetchRecipe();
    }

    return(
      <div className="container">
        <Menu />
        <Home list={recipeList} />
        <Footer />
      </div>
    );
  }
}

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    };

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick(id){
    this.setState({
      clicked: true,
      id: id,
    });
  }
  
  render(){
    const {clicked} = this.state;
    const list = this.props.list;
    if (!list){
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
          { list.map((item, index) => 
          <div className="grid">
             <div className="card" key={index}>
              {console.log('http://gtest.dev.wwbtc.com'+item.field_images)}

              <a href="#" onClick={() => this.onRecipeClick(item.nodeID)}>
              <img className="card-img-top imgSize" src={'http://gtest.dev.wwbtc.com'+item.field_images} alt={item.title}/>
              </a>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.field_summary}</p>
              </div>
            </div>
          </div>
          )}
      </div>
    );
  }
}

class Recipe extends React.Component {
  render(){
    return(
      <div>
          <p className="recipeTitle">Doro Wat</p>
          <div className="card">
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
