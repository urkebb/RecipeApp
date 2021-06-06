import React from 'react'
import NavLinks from '../../Components/NavLinks/NavLinks'
import {Link} from 'react-router-dom'
import './MainNavigation.css'

export default function MainNavigation() {
    return (
        <header className="main-header">
            <h1 className="main-navigation__title">
                <Link className="home-link" to="/">RecipeApp</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </header>
    )
}
