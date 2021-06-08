import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../../Components/Card/Card'
import Button from '../../../Components/Button/Button'


const picture = "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg";

const DUMMY_RECIPES = [{
    id: 1,
    userID: 1,
    title: "Naslov",
    description: "OPIS",
    picture: picture,
    steps: [{
        description: "ovo je prvi korak"
    }, {
        description: "ovo je drugi korak"
    }],
    ingredients: [{
        name: "flour",
        amount: 100,
        unit: "gram"
    }, {
        name: "banana",
        amount: 2,
        unit: "piece"
    }]
}, {
    id: 2,
    userID: 2,
    title: "Naslov",
    description: "OPIS",
    picture: picture,
    steps: [{
        description: "ovo je prvi korak"
    }, {
        description: "ovo je drugi korak"
    }],
    ingredients: [{
        name: "flour",
        amount: 100,
        unit: "gram"
    }, {
        name: "banana",
        amount: 2,
        unit: "piece"
    }]
}, {
    id: 3,
    userID: 1,
    title: "Naslov",
    description: "OPIS",
    picture: picture,
    steps: [{
        description: "ovo je prvi korak"
    }, {
        description: "ovo je drugi korak"
    }],
    ingredients: [{
        name: "flour",
        amount: 100,
        unit: "gram"
    }, {
        name: "banana",
        amount: 2,
        unit: "piece"
    }, {
        name: "banana",
        amount: 2,
        unit: "piece"
    },
    {
        name: "banana",
        amount: 2,
        unit: "piece"
    }]
}];

export default function UpdateRecipe() {

    const [values, setValues] = useState({
        Title: '',
        Description: '',
        Picture: null,
        Steps: [],
        Ingredients: []
    });
    const [submitClicked, setIsSubmitClicked] = useState(false);
    const [inputStep, setInputStep] = useState('');
    const [inputIngredientName, setInputIngredientName] = useState('');
    const [inputIngredientAmount, setInputIngredientAmount] = useState('');
    const [inputIngredientUnit, setInputIngredientUnit] = useState('');

    const recipeID = useParams().recipeID;

    const identifiedRecipe = DUMMY_RECIPES.find(r => {
        return r.id == recipeID;
    })

    useEffect(() => {
        if (identifiedRecipe) {
            setValues(() => {
                return {
                    Title: identifiedRecipe.title,
                    Description: identifiedRecipe.description,
                    Picture: identifiedRecipe.picture,
                    Steps: identifiedRecipe.steps,
                    Ingredients: identifiedRecipe.ingredients
                }
            })
        }
    }, [])

    function onUpdateHandler(e) {
        e.preventDefault();
        console.log("ovo se serveru salje\n" + JSON.stringify(values));
        if (values.Title != '' && values.Ingredients.length > 0 && values.Steps.length > 0 && values.Picture) {
            setIsSubmitClicked(false);
        }
    }
    console.log(values);

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

    function deleteStep() {
        setValues(() => {
            return {
                ...values,
                //Steps: values.Steps.splice(values.Steps.length - 1, 1)
                Steps: values.Steps.filter((el, idx) => {
                    return idx != values.Steps.length - 1
                })
            }

        })
        console.log("AFTER DELETING \n", JSON.stringify(values));
    }
    function deleteIngredient() {
        setValues(() => {
            return {
                ...values,
                Ingredients: values.Ingredients.filter((el, idx) => {
                    return idx != values.Ingredients.length - 1
                })
            }
        })

    }

    return (
        <Card className="newRecipe">
            <form className="inputFields" onSubmit={onUpdateHandler}>
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
                    {submitClicked && values.Title == '' ? (<p style={{ color: "red", marginTop: "10px" }}>Unesite naslov</p>) : <p></p>}
                </div>
                <div className="inputFields__title">
                    <h3>Description</h3>
                    <input type="text" value={values.Description} onChange={e => {
                        setValues(() => {
                            return {
                                ...values,
                                Description: e.target.value
                            }

                        })
                    }}></input>
                    {submitClicked && values.Description == '' ? (<p style={{ color: "red", marginTop: "10px" }}>Unesite opis</p>) : <p></p>}
                </div>

                <div className="inputFields__steps">

                    <h3>Steps</h3>
                    <input type="text" value={inputStep} onChange={e => {
                        setInputStep(e.target.value);
                    }}></input>

                    {submitClicked && values.Steps.length == 0 ? (<p style={{ color: "red", marginTop: "0px" }}>Unesite bar jedan korak</p>) : <p></p>}
                    <div style={{
                        textAlign: "right",
                        width: "98%",

                    }}><div>
                            <button style={{ marginRight: "15px" }} onClick={deleteStep}>DELETE LAST STEP</button>
                            <button onClick={handleAddStep}>ADD STEP</button>
                        </div>
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
                        width: "98%",
                    }}>
                        {submitClicked && values.Ingredients.length == 0 ? (<p style={{ color: "red", marginTop: "0px", textAlign: "left" }}>Unesite bar jedan sastojak</p>) : <p></p>}
                        <button onClick={deleteIngredient} style={{ marginRight: "15px" }}>DELETE LAST INGREDIENT</button>
                        <button onClick={addIngredientHandler} >ADD INGREDIENT </button>
                    </div>
                </div>

                <button
                    type="submit"
                    onClick={() => {
                        setIsSubmitClicked(true);
                    }}
                    text="SUBMIT"
                >Update</button>
            </form>
        </Card>
    )
}
