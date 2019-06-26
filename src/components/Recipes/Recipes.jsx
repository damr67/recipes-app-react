import React, { useState } from 'react';
import Form from '../Form';
import axios from 'axios';

const Recipes = () => {

    const [API_KEY,setAPI_KEY] = useState('4d5a6b72ee920b0584ab4b312f1a2bdf');
    const [searchText, setSearchText] = useState('');
    const [recipes,setRecipes] = useState([]);
    const [loading,setLoading] = useState(false);
    const [count,setCount] = useState(20);

    const fetchRecipes = async () => {
        setLoading(true); 
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${searchText}&count=${count}`);
        setRecipes(res.data.recipes);
        setLoading(false);
    }

    const handleInput = e => (setSearchText(e.target.value));

    const handleSearch = e => {
        e.preventDefault();
        if(searchText!==''){
            fetchRecipes();
            setSearchText('');
        }
    };

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <React.Fragment>
            <h1>Recipes</h1>
            <Form onSearch={handleSearch} onInput={handleInput} onInput={handleInput}/>
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