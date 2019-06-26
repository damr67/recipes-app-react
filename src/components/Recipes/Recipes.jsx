import React, { useState } from 'react';
import Form from '../Form';
import axios from 'axios';

const Recipes = () => {

    const [API_KEY,setAPI_KEY] = useState('4d5a6b72ee920b0584ab4b312f1a2bdf');
    const [recipes,setRecipes] = useState([]);
    const [loading,setLoading] = useState(false);
    const [count,setCount] = useState(20);

    const fetchRecipes = async () => {
        setLoading(true); 
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken%20breast&count=${count}`);
        setRecipes(res.data.recipes);
        setLoading(false);
    }

    const handleSearch = e => {
        e.preventDefault();
        fetchRecipes();
        console.log(recipes);
    };

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <React.Fragment>
            <h1>Recipes</h1>
            <Form onSearch={handleSearch}/>
            <div className="recipes__grid">
                {recipes.map(recipe => (
                    <div key={recipe.recipe_id}>
                        <h3>{recipe.title}</h3>
                        <h4>{recipe.publisher}</h4>
                        <button>Open</button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}
 
export default Recipes;