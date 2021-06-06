import React from 'react'
import RecipesItem from '../RecipesItem/RecipesItem';
import './RecipestList.css'

export default function RecipesList(props) {
    return (
        <ul className="recipes-list">
            {props.items.map((r) => {
                return <RecipesItem
                key={r.id}
                id={r.id}
                userID={r.userID}
                title={r.title}
                picture={r.picture}
                steps={r.steps}
                ingredients={r.ingredients}
                />
            })}
        </ul>
    )
}
