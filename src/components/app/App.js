import React from 'react';
import Footer from '../../shared/Footer';
import Menu from '../../shared/Menu';
import Home from '../home/Home';

//this component will set the general look of the page
class App extends React.Component {
  constructor() {
    super();
    this.state = {recipeData: [], homePage: [] }
    this.fetchRecipe = this.fetchRecipe.bind(this);
    this.fetchHomePage = this.fetchHomePage.bind(this);
  }

  //get all recipes from given API endpoint
  fetchRecipe(){
    fetch(process.env.REACT_APP_API_BASE+process.env.REACT_APP_API_RECIPE_ENDPOINT).then(response=> {
      return response.json();
    }).then(data => {
      this.setState({recipeData: data});
    }).catch(err => {
      this.console.log(err);
    })
  }
  //gets the home page info from give API endpoint
  fetchHomePage(){
    fetch(process.env.REACT_APP_API_BASE+process.env.REACT_APP_API_HOME_ENDPOINT).then(response => {
      return response.json();
    }).then(data => {
      this.setState({homePage: data});
    }).catch(err => {
      this.console.log(err);
    })
  }

  componentDidMount(){
    this.fetchRecipe();
    this.fetchHomePage();
  }

  render(){
    const {recipeData, homePage} = this.state;

    return(
      <div>
        <Menu/>
        <Home recipeData={recipeData} homePage={homePage}/>
        <Footer/>

        {/* tried to implement react router, did not work completely */}
        {/* <Router>
          <Menu/>
          <Switch>
            <Route path="/" exact render={(props) => <Home {... props} recipeClicked="false" recipeData={recipeData} homePage={homePage}/>}/>/>
            <Route path="/recipes" exact render={(props) => <Recipe {... props} recipeID={0} recipeData={recipeData}/>}/>/>
            <Route path="/recipes/:id" render={(props) => <Home {... props}  recipeClicked="true" recipeData={recipeData} homePage={homePage}/>}/>/>
          </Switch>
          <Footer />
        </Router> */}
      </div> 
    );
  }

}

export default App;
