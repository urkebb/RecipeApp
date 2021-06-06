import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Card from './Components/Card/Card'
import Users from './User/Pages/Users'
import React from 'react';
import MainNavigation from './Components/MainNavigation/MainNavigation'
import Recipes from './Recipe/Pages/Recipes'
import NewRecipe from './Recipe/Pages/NewRecipe'

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userID/recipes" exact>
            <Recipes />
          </Route>
          <Route path="/recipe/new" exact>
            <NewRecipe />
          </Route>

        </Switch>
      </main>
    </Router>
  );
}

export default App;
