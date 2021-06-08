import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthContext'
import { useHistory } from 'react-router-dom';
import './NavLinks.css'

export default function NavLinks() {

    const authContext = useContext(AuthContext);
    const history = useHistory();
    const link = "/1/recipes"

    function logoutHandler() {
        authContext.logout();
        history.push("/auth");
    }

    return <ul className="nav-links">
        {authContext.isLoggedIn && <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>}

        {authContext.isLoggedIn && <li>
            <NavLink to={link}>MY RECIPES</NavLink>
        </li>}


        {authContext.isLoggedIn && <li>
            <NavLink to="/recipe/new">ADD RECIPE</NavLink>
        </li>}


        {!authContext.isLoggedIn && <li>
            <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>}


        {authContext.isLoggedIn && <li>
            <button onClick={logoutHandler} >LOGOUT</button>
        </li>}
    </ul>
}
