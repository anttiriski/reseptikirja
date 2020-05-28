const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((request, response) => {
    Recipe.find()
        .then(recipes => response.json(recipes))
        .catch(err => response.status(400).json('Error: ' + err))
});

router.route('/add').post((request, response) => {
    const name = request.body.name;
    const description = request.body.description;
    const ingredients = request.body.ingredients;
    const recipeSteps = request.body.recipeSteps;
    const diet = request.body.diet;
    const category = request.body.category;

    const newRecipe = new Recipe({name, description, ingredients, recipeSteps, category, diet});

    newRecipe.save()
        .then(() => response.json('Recipe added!'))
        .catch(err => response.status(400).json('Error: ' + err));
});

// delete by id ja muuta mukavaa tänne lisää, update

module.exports = router;