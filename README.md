# A simple Recipe magazine using React
[![Build Status](https://travis-ci.org/Bherekhet/Drupal-React.svg?branch=master)](https://travis-ci.org/Bherekhet/Drupal-React) [![Coverage Status](https://coveralls.io/repos/github/Bherekhet/Drupal-React/badge.svg)](https://coveralls.io/github/Bherekhet/Drupal-React)

This is a very simple implementaion of a recipe megazine. It consists of a couple of recipes on the home page, once a user clicks on the recipe image from home page, it will direct the user to a description page with more info about the recipe. The user will also be able to click on 'next' and 'previous' button while in description page to move between all recipes.
### To run this app please follow the guide below
Clone this repo :
```
$ git clone https://github.com/Bherekhet/Drupal-React.git
```
After clone, run
```
$ npm install
```
Once you've done that, you should have all the dependencies installed.
### Now, you can run the app in a few various modes
To run in development mode
```
$ npm start
```
To run in production mode
```
$ npm build 
```
To run in test mode
- without watch mode
```
$ npm test 
```
- with watch mode
```
$ npm run test:watch
```

### To update the environment files
Locate the '.env.prod' in root folder to update production variables and locate 'env.dev' in root folder to update development variables. (same for updating API endpoints)