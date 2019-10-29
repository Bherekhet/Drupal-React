import React from 'react';
import './recipe.css';

class Recipe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        node: 0,
        list: null
      }

      this.decideRecipeDisplay = this.decideRecipeDisplay.bind(this);
    }

    decideRecipeDisplay(recipes, current, button){
      if (button === 0){
        this.setState({node: ((current-1 === -1) ? recipes-1 : current-1)});
      }else{
        this.setState({node: ((current+1 === recipes) ? 0 : current+1)}, () => {
        });
      }
    }
    
    componentWillMount(){
      this.setState({list: this.props.recipeList, node: this.props.recipeID});
    }

    componentWillUnmount(){
      // Im not sure what to unmount yet
    }
    
    render(){
      const {list, node} = this.state;
      //var markup = {__html: list[node].body}
      var ingredeints = (list[node].field_ingredients).split(",");
      //console.log(ingredeints);

      return(
        <div className="recipe">
          <div className="rec-top">
            <div className="recipe-title">{list[node].title}</div>
            <img className="rounded mx-auto d-block" style={{width: '80%'}} 
                src={'http://gtest.dev.wwbtc.com'+list[node].field_images}></img>
          </div>
          <div className="buttons">
            <a class="prev" onClick={(e) => this.decideRecipeDisplay(list.length, node, 0)}>&#10094;</a>
            <a class="next" onClick={(e) => this.decideRecipeDisplay(list.length, node, 1)}>&#10095;</a>
          </div>
          <div className="rec-detail">
            <p dangerouslySetInnerHTML={{__html: list[node].body}}></p>
          </div>
          <div className="rec-ing">
            <p>What you will need to make the dish</p>
            {ingredeints.map((item) => 
                <li>{item}</li>
            )}
          </div>
          
        </div>
      )
    }
  }


export default Recipe;  