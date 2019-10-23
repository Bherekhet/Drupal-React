import {LoremIpsum} from "lorem-ipsum";


const lorem = new LoremIpsum ({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  })

export default lorem;

// const list = [
//   {
//     objectID: 0,
//     recipeName: "Doro Wat",
//     description: "Made only for certain occations",
//     url: "https://amboethiopiancuisine.files.wordpress.com/2011/06/013011-035.jpg?w=1800&h=720&crop=1)",
//     detail: lorem.generateSentences(5),
//     need: lorem.generateWords(3)
//   },
//   {
//     objectID: 1,
//     recipeName: "Shiro",
//     description: "Daily blessed feast",
//     url: "https://www.wassethiopianrestaurant.com/images/10-promo-slides/Shiro-Wat.jpg",
//     detail: lorem.generateSentences(5),
//     need: lorem.generateWords(3)  
//   }
// ]


 // fetchRecipe(){
  //   fetch("http://gtest.dev.wwbtc.com/json/rec/")
  //   .then(response=> response.json())
  //   .then(result => this.setState({recipeList: result}));
  // }