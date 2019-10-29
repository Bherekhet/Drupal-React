import React from 'react';
import lorem from '../../shared/Lorem-ipsum';
import Recipe from '../recipe/recipe';
import './home.css';



class Home extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        clicked: false,
        node: null
      };
  
      this.onRecipeClick = this.onRecipeClick.bind(this);
    }
  
    onRecipeClick(id, node){
      this.setState({
        clicked: true,
        id: id,
        node: node,
      });
    }
    
    render(){
      const {clicked, node} = this.state;
      const list = this.props.list;
      
      if (!list){
        return null;
      }
  
      if (clicked){
        return <Recipe recipeID={this.state.node} recipeList={list}/>
      } 
      return( 
        <div className="recipes">
            { list.map((item, index) => 
            <div key={item.view_node} className="grid">
              <div className="rec-iden">
                <span><p className="rec-title">{item.title}</p></span>
                <span><p className="rec-summary">{item.field_summary}</p></span>
              </div>
              <div className="rec-bottom">
                <div className="rec-float">
                  <h4 className="last-2-comments">
                    <h5>last comment: {lorem.generateWords(3)} </h5>
                  </h4>
                  <h4 className="last-2-comments">
                  <h5>last comment: {lorem.generateWords(3)} </h5>
                  </h4>
                </div>
                <div className="rec-float">
                  <a href="#" onClick={() => this.onRecipeClick(item.nodeid, index)}>
                    <img className="rec-images" src={'http://gtest.dev.wwbtc.com'+item.field_images} alt={item.title}/>
                  </a>
                </div>
              </div>
            </div>
            )}
        </div>
      );
    }
}

export default Home;