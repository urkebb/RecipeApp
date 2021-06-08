import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Card from './Components/Card/Card'
import Users from './User/Pages/Users'
import React, { useState, useEffect } from 'react';
import MainNavigation from './Components/MainNavigation/MainNavigation'
import Recipes from './Recipe/Pages/Recipes'
import NewRecipe from './Recipe/Pages/NewRecipe'
import UpdateRecipe from './Recipe/Pages/UpdateRecipe/UpdateRecipe'
import Auth from './User/Pages/Auth'
import { AuthContext } from './Components/AuthContext/AuthContext'
import ResetPassword from './User/Pages/ResetPassword/ResetPassword'

function App() {
  let routes;

  const [token, setToken] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false)
  const [userID, setUserID] = useState(null);
  const [tokenExpirationTime, setTokenExpirationTime] = useState();

  function login(token, userID, expirationTime) {
    setLoggedIn(true);
    setToken(token);
    setUserID(userID);
    const expiration = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 30)
    setTokenExpirationTime(expiration);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        token,
        userID,
        expirationTime: expiration.toISOString()
      })
    );
  }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData && storedData.token && new Date(storedData.expirationTime) > new Date()) {
      login(storedData.token, storedData.userID, new Date(storedData.expirationTime));
    }
  }, [loggedIn])

  function logout() {
    setLoggedIn(false);
    setToken(null);
    setTokenExpirationTime(null);
    setUserID(null);
    localStorage.removeItem("userData");
  }
  console.log(loggedIn + " OVO JE DA LI SI ULOGOVAN")
  if (!loggedIn) {
    routes =
      (
        <Switch>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/reset_password" exact>
            <ResetPassword />
          </Route>
          <Redirect to="/auth">
          </Redirect>
        </Switch>
      );
  } else {
    routes = (
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
        <Route path="/recipe/:recipeID" exact>
          <UpdateRecipe />
        </Route>
        <Redirect to="/">

        </Redirect>
      </Switch>
    );
  }



  return (
    <Router>
      <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, userID: userID, login: login, logout: logout }}>
        <MainNavigation />
        <main>

          {routes}

        </main>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
