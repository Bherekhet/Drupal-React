import React from 'react';
import './Recipe.css';

class Recipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipeID: this.props.recipeID
      }

      this.decideNextRecipe = this.decideNextRecipe.bind(this);
    }

    decideNextRecipe(recipes, current, button){
      if (button === 0){
        this.setState({recipeID: ((current-1 === -1) ? recipes-1 : current-1)});
      }else{
        this.setState({recipeID: ((current+1 === recipes) ? 0 : current+1)}, () => {
        });
      }
    }
    
    render(){
      const {recipeData} = this.props;
      const {recipeID} = this.state;
      var ingredeints = (recipeData[recipeID].field_ingredients).split(",");

      return(
        <div className="recipe">
          <div className="rec-top">
            <div className="recipe-title">{recipeData[recipeID].title}</div>
            <img className="rounded mx-auto d-block" style={{width: '80%'}} 
                src={'http://gtest.dev.wwbtc.com'+recipeData[recipeID].field_images}></img>
          </div>
          <div className="buttons">
            <a className="prev" onClick={(e) => this.decideNextRecipe(recipeData.length, recipeID, 0)}>&#10094;</a>
            <a className="next" onClick={(e) => this.decideNextRecipe(recipeData.length, recipeID, 1)}>&#10095;</a>
          </div>
          <div className="rec-detail">
            <p dangerouslySetInnerHTML={{__html: recipeData[recipeID].body}}></p>
          </div>
          <div className="rec-ing">
            <p>What you will need to make the dish</p>
            {ingredeints.map((item, index) => 
                <li key={index}>{item}</li>
            )}
          </div>
        </div>
      )
    }
  }


export default Recipe;  