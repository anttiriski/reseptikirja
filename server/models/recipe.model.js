const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String},
    ingredients: { type: Array},
    recipeSteps: { type: Array},
    category: { type: String},
    ovenTemperature: { type: Number},
    cookingTime: {type: Number},
    servings: {type: Number},
    diet: { type: Array},
    favorite: {type: Boolean}
}, {
        timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;