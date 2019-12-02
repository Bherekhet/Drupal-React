import React from 'react';
import {Route, Switch, Link } from 'react-router-dom'
import Recipe from '../recipe/Recipe.js';
import './Home.css';

// this component load the home page of the react app
// it will include an intro section and gives a snapshot view of recipes fetched

class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        c: false,
        node: null
      };
  
      this.onRecipeClick = this.onRecipeClick.bind(this);
    }

    //function gets called when a recipe picture is clicked, updates 'recipeClicked' state 
    onRecipeClick(node){
      this.setState({
        recipeClicked: true,
        node: node
      });
    }
    
    render(){
      const {recipeClicked, node} = this.state;
      const {recipeData, homePage} = this.props;
      
      if (recipeClicked){
        return <Recipe recipeID={node} recipeData={recipeData}/> 
      }

      return( 
        <div className="main">
          {/* if homepage info is fetched, it gets rendered */}
          {homePage.length > 0 && 
            <p className="intro" dangerouslySetInnerHTML={{__html: homePage[0].body}}></p>
          }
          {/* if homepage info is not found, displays message below */}
          {homePage.length === 0 && 
          <p className="intro" >{"Oops no data found for homepage on content manager"}</p>}
           
          <div className="contain">
              {recipeData.length === 0 && 
                <p>{"Oops no data found for recipes on content manager"}</p>
              }
              { recipeData.map((item, index) => 
              <div  className="card">
                <div key={item.view_node} className="card-content">
                  <span><p className="title">{item.title}</p></span>
                  <span><p>{item.field_summary}</p></span>
                  {/* <a href={item.title} onClick={(e) => this.onRecipeClick(e, index)}> */}
                  <a href="#" onClick={() => this.onRecipeClick(index)}>
                    {/* only the first of the w2 images feteched will be displayed */}
                    <img src={process.env.REACT_APP_API_BASE+(item.field_images.slice(0, item.field_images.indexOf(',')))} alt={item.title}/>
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