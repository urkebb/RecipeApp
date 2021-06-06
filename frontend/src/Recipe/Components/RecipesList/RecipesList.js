import React from 'react'
import RecipesItem from '../RecipesItem/RecipesItem';
import Card from '../../../Components/Card/Card'
import './RecipestList.css'

export default function RecipesList(props) {

    if (props.items.length == 0) {
        return <Card className="noPlaces">
            <h2>NO RECIPES</h2>
        </Card>
    }
    else {
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
}
