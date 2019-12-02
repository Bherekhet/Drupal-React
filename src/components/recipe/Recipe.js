import React from 'react';
import './Recipe.css';
import '../home/Home'

//this component loads information about a single recipe when a recipe is clicked form home page
class Recipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        recipeID: this.props.recipeID
      }
      this.decideNextRecipe = this.decideNextRecipe.bind(this);
    }

    //function to display a recipe for when next/previous button selected
    //takes 3 parameters, recipes=number of recipes, current=current recipe on display, button=next or previous button selected
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
      
      if (recipeData.length === 0) {
        return null;
      }
      const ingredeints = (recipeData[recipeID].field_ingredients).split(",");

      return(
        <div className="recipe">
          <div className="rec-top">
            <div className="recipe-title">{recipeData[recipeID].title}</div>
            <img className="rounded mx-auto d-block" style={{width: '80%'}} 
                src={'http://gtest.dev.wwbtc.com'+recipeData[recipeID].field_images} alt={recipeData.title}></img>
          </div>
          <div className="buttons">
            <button className="prev" onClick={() => this.decideNextRecipe(recipeData.length, recipeID, 0)}>&#10094;</button>
            <button className="next" onClick={() => this.decideNextRecipe(recipeData.length, recipeID, 1)}>&#10095;</button>
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