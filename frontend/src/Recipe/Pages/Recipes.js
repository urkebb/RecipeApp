import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipesList from '../../Recipe/Components/RecipesList/RecipesList'

const picture = "https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg";

const recipes = [{
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
    id: 5,
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

export default function Recipes() {
    const [loadedRecipes, setLoadedRecipes] = useState([])

    const userID = useParams().userID;
    function deleteRecipe(recipeID) {
        setLoadedRecipes(loadedRecipes.filter((r)=>{
            return r.id != recipeID;
        })) 
    }

    useEffect(() => {
        const response = JSON.stringify(recipes);
        console.log("ovo dobijamo sa servera\n" + response);

        setLoadedRecipes(recipes.filter((r) => {
            return r.userID == userID
        }));
    }, [])

    return (
        <div>
            <RecipesList items={loadedRecipes} deleteRecipe={deleteRecipe} />
        </div>
    )

}
