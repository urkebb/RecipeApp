import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

export default function NavLinks() {

    const link="/1/recipes"

    return <ul className="nav-links">
        <li>
            <NavLink to="/" exact>ALL USERS</NavLink>
        </li>

        <li>
            <NavLink to={link}>MY RECIPES</NavLink>
        </li>


        <li>
            <NavLink to="/recipe/new">ADD RECIPE</NavLink>
        </li>


        <li>
            <NavLink to="/auth">REGISTER</NavLink>
        </li>


        <li>
            <button className="logout">LOGOUT</button>
        </li>


    </ul>
}
