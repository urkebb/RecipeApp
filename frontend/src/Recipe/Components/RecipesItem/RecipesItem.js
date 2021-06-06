import React from 'react'
import Card from '../../../Components/Card/Card'
import './RecipesItem.css'

export default function RecipesItem(props) {
    return (
        <li className="recipe-item">
            <Card className="recipe-item__content">
                <div className="recipe-item__image">
                    <img src={props.picture}></img>
                </div>
                <div className="recipe-item__info">
                    <h2>{props.title}</h2>
                    <div className="recipe-item__steps">
                        <h4>Steps in preparation:</h4>
                        {props.steps.map((step, idx) => {
                            return <p>{idx + 1}: {step.description}</p>

                        })}
                    </div>
                    <div className="recipe-item__ingredients">
                        <h4>Ingredients:</h4>
                        {props.ingredients.map((ingredient, idx) => {
                            return <p>{ingredient.name} {ingredient.amount == 1 ? ingredient.amount + ' ' + ingredient.unit : ingredient.amount + ' ' + ingredient.unit + 's'}</p>

                        })}
                    </div>
                </div>
            </Card>
        </li>
    )
}
