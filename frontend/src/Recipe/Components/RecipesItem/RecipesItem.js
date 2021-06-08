import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../../../Components/Card/Card'
import { AuthContext } from '../../../Components/AuthContext/AuthContext'

import './RecipesItem.css'

export default function RecipesItem(props) {

    const authContext = useContext(AuthContext);
    const userID = authContext.userID;
    console.log(" OVO JE ID KORISNIKA KOJI JE ULOGOVAN " + userID);

    function deleteHandler() {
       props.deleteRecipe(props.id)
    }

    return (
        <li className="recipe-item">
            <Card className="recipe-item__content">
                <div className="recipe-item__image">
                    <img src={props.picture}></img>
                </div>
                <div className="recipe-item__info">
                    <h2>{props.title}</h2>
                    <h4>{props.description}</h4>
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
                    {props.userID == userID &&
                        <div style={{ textAlign: "left" }}>
                            <Link to={`/recipe/${props.id}`}><button style={{ alignSelf: "left", float: "left" }}>EDIT</button></Link>
                            <div style={{ textAlign: "right" }}>
                                <button onClick={deleteHandler} style={{ alignSelf: "right" }}>DELETE</button>
                            </div>
                        </div>}
                </div>

            </Card>
        </li>
    )
}
