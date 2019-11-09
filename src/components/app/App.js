import React from 'react';
import './App.css';
import Footer from '../../shared/footer';
import Nav from '../../shared/menu';
import Home from '../home/home'

class App extends React.Component {
  constructor() {
    super();

    this.state = {recipeData: [] }
    
    this.fetchRecipe = this.fetchRecipe.bind(this);
  }

  fetchRecipe(){
    fetch("http://gtest.dev.wwbtc.com/json/rec/").then(response=> {
      return response.json();
    }).then(data => {
      this.setState({recipeData: data});
    }).catch(err => {
      this.console.log(err);
    })
  }

  componentDidMount(){
    this.fetchRecipe();
  }

  render(){
    const {recipeData} = this.state;
    return(
      <div>
        <Nav/>
        <Home recipeData={recipeData}/>
        <Footer />
      </div> 
    );
  }
}

export default App;
