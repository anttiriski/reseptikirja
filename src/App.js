import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'
import UpdateRecipe from './components/UpdateRecipe'

const App = () => {

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addRecipe" component={AddRecipe} />
        <Route path="/update" component={UpdateRecipe} />
      </Switch>
    </div>
  );
}

export default App;
