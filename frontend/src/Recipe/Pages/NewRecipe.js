import React from 'react'
import Card from '../../Components/Card/Card'
import './NewRecipe.css'

export default function NewRecipe() {
    return (
        <Card className="newRecipe">
            <form className="inputFields">
                <div className="inputFields__title">
                    <h3>Title</h3>
                    <input type="text"></input>
                </div>
                <div className="inputFields__steps">
                    <h3>Steps</h3>
                    <textarea type="text"></textarea>
                    <div style={{
                        textAlign: "right",
                        width:"99%",
                    }}>
                        <button>ADD STEP</button>
                    </div>
                </div>
                <div className="inputFields__ingredients">
                    <h3>Ingredients</h3>
                    <p className="inputFields__ingredients__name">name: </p><input type="text"></input>
                    <p className="inputFields__ingredients__amount">amount: </p><input type="text"></input>
                    <p className="inputFields__ingredients__unit">unit: </p><input type="text"></input>
                </div>
            </form>
        </Card>
    )
}
