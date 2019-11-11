import React from 'react';
import Recipe from '../recipe/Recipe.js';
import './Home.css';


class Home extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        recipeClicked: false,
        node: null
      };
  
      this.onRecipeClick = this.onRecipeClick.bind(this);
    }
  
    onRecipeClick(e, node){
      e.preventDefault();
      this.setState({
        recipeClicked: true,
        node: node
      });
    }
    
    render(){
      const {recipeClicked, node} = this.state;
      const recipeData = this.props.recipeData;
      
      if (recipeClicked){
        console.log(recipeData);
        return <Recipe recipeID={node} recipeData={recipeData}/>
      } 
      return( 
        <div className="main">
          <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="contain">
              { recipeData.map((item, index) => 
              <div key={item.view_node} className="card">
                <div className="card-content">
                  <span><p className="title">{item.title}</p></span>
                  <span><p>{item.field_summary}</p></span>
                  <a href={item.title} onClick={(e) => this.onRecipeClick(e, index)}>
                    <img src={'http://gtest.dev.wwbtc.com'+item.field_images} alt={item.title}/>
                  </a>
                </div>
                
              </div>
              )}
          </div>
        </div>
      );
    }
}

export default Home;