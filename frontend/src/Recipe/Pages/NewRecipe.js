import React, { useState } from 'react'
import Card from '../../Components/Card/Card'
import Button from '../../Components/Button/Button'
import './NewRecipe.css'

export default function NewRecipe() {


    const [inputStep, setInputStep] = useState('');
    const [inputIngredientName, setInputIngredientName] = useState('');
    const [inputIngredientAmount, setInputIngredientAmount] = useState('');
    const [inputIngredientUnit, setInputIngredientUnit] = useState('');
    const [submitClicked, setIsSubmitClicked] = useState(false);

    const [values, setValues] = useState({
        Title: '',
        Steps: [],
        Ingredients: []
    });

    function handleAddStep() {

        if (inputStep != '') {
            const name = inputStep
            const newStep = {
                description: name
            }
            setValues((prevValues) => {
                return {
                    ...values,
                    Steps: [...values.Steps, newStep],
                }
            })
            setInputStep('');
        }
    }

    function addIngredientHandler() {

        if (inputIngredientAmount != '' && inputIngredientName != '' && inputIngredientUnit != '') {
            const newIngredient = {
                name: inputIngredientName,
                amount: inputIngredientAmount,
                unit: inputIngredientUnit
            }
            setValues(() => {
                return {
                    ...values,
                    Ingredients: [...values.Ingredients, newIngredient]
                }
            })
            setInputIngredientUnit('');
            setInputIngredientName('');
            setInputIngredientAmount('');
        }

    }

    function onSubmitHandler(e) {
        e.preventDefault();

        if (values.Title != '' && values.Ingredients.length > 0 && values.Steps.length > 0) {
            console.log("ovo se salje serveru" + JSON.stringify(values));

        }
    }


    return (
        <Card className="newRecipe">
            <form className="inputFields" onSubmit={onSubmitHandler}>
                <div className="inputFields__title">
                    <h3>Title</h3>
                    <input type="text" value={values.Title} onChange={(e) => {

                        setValues(() => {
                            return {
                                ...values,
                                Title: e.target.value,
                            }
                        })
                    }}></input>
                    {submitClicked && values.Title == '' ? (<p style={{ color: "red", marginTop: "10px" }}>Morate uneti naslov</p>) : <p></p>}
                </div>
                <div className="inputFields__steps">
                    <h3>Steps</h3>
                    <input type="text" value={inputStep} onChange={e => {
                        setInputStep(e.target.value);
                    }}></input>
                    {submitClicked && values.Steps.length == 0 ? (<p style={{ color: "red", marginTop: "10px" }}>Morate uneti bar jedan korak</p>) : <p></p>}
                    <div style={{
                        textAlign: "right",

                    }}>
                        <Button
                            text="ADD STEP"
                            onClick={handleAddStep}
                        />
                    </div>
                </div>
                <div className="inputFields__ingredients">
                    <h3>Ingredients</h3>
                    <p className="inputFields__ingredients__name">name: </p><input value={inputIngredientName} onChange={e => {
                        setInputIngredientName(e.target.value);
                    }} type="text"></input>
                    <p className="inputFields__ingredients__amount">amount: </p><input value={inputIngredientAmount} onChange={e => {
                        setInputIngredientAmount(e.target.value);
                    }} type="text"></input>
                    <p className="inputFields__ingredients__unit">unit: </p><input value={inputIngredientUnit} onChange={e => {
                        setInputIngredientUnit(e.target.value);
                    }} type="text"></input>
                    <div style={{
                        textAlign: "right",
                    }}>
                        {submitClicked && values.Ingredients.length == 0 ? (<p style={{ color: "red", marginTop: "10px",textAlign:"left" }}>Morate uneti bar jedan sastojak</p>) : <p></p>}
                        <Button text="ADD INGREDIENT"
                            onClick={addIngredientHandler} />
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={() => { setIsSubmitClicked(true) }}>
                    SUBMIT
               </button>
            </form>
        </Card>
    )
}
