import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Recipes from './components/Recipes/Recipes';
import About from './components/About';
import Error from './components/Error';

const App = () => {

    return ( 
    <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/recipes" component={Recipes}/>
            <Route path="/about" component={About}/>
            <Route component={Error}/>
            </Switch>
    </BrowserRouter>
     );
}


export default App;
