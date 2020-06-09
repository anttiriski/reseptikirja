const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((request, response) => {
    Recipe.find()
        .then(recipes => response.json(recipes))
        .catch(err => response.status(400).json('Error: ' + err));

});

router.route('/add').post((request, response) => {
    const name = request.body.name;
    const description = request.body.description;
    const ingredients = request.body.ingredients;
    const recipeSteps = request.body.recipeSteps;
    const category = request.body.category;
    const ovenTemperature = request.body.ovenTemperature;
    const cookingTime = request.body.cookingTime;
    const servings = request.body.servings;
    const diet = request.body.diet;
    const newRecipe = new Recipe({name, description, ingredients, recipeSteps, category, ovenTemperature, cookingTime, servings, diet});

    newRecipe.save()
        .then(() => response.json('Recipe added!'))
        .catch(err => response.status(400).json('Error: ' + err));
});

router.route("/update").get((request, response) => {
    console.log(request.query.name)
    Recipe.findOne({ 'name': request.query.name }, function(err, recipe) {
        response.json(recipe)
    })
});

router.route("/:id").get((request, response) => {
    Recipe.findById(request.params.id)
        .then(recipe => response.json(recipe))
        .catch(error => response.status(400).json("Error: " + error))
})


router.route("/:id").delete((request, response) => {
    Recipe.findByIdAndDelete(request.params.id)
        .then(() => response.json("Recipe deleted."))
        .catch(error => response.status(400).json("Error: " + error))
})



router.route("/update/:id").post((request, response) => {
    Recipe.findById(request.params.id)
        .then(recipe => {
            recipe.name = request.body.name;
            recipe.description = request.body.description;
            recipe.ingredients = request.body.ingredients;
            recipe.recipeSteps = request.body.recipeSteps;
            recipe.category = request.body.category;
            recipe.ovenTemperature = request.body.ovenTemperature;
            recipe.cookingTime = request.body.cookingTime;
            recipe.servings = request.body.servings;
            recipe.diet = request.body.diet;

            recipe.save()
                .then(() => response.json("Recipe updated!"))
                .catch(error => response.status(400).json("Error: " + error))
        })
        .catch(error => response.status(400).json("Error: " + error))
});




module.exports = router;