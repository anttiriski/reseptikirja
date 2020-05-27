const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    ingredients: { type: Array, required: true},
    recipeSteps: { type: Array, required: true},
    diet: { type: String}
}, {
        timestamps: true,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;