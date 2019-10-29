import React from 'react';
import './App.css';
import Footer from '../../shared/footer';
import Nav from '../../shared/menu';
import Home from '../home/home'

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
      //console.log(data);
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
    return(
      <div>
        <Nav list={recipeList}/>
        <div className="home">
          <Home list={recipeList} />
        </div>
        <Footer />
      </div> 
    );
  }
}

export default App;
