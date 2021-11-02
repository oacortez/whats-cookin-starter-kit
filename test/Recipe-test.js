import { expect } from 'chai';
import Recipe from '../src/classes/Recipe.js';
import smallIngredientsData from '../src/data/dummyData/dummyIngredients';
import smallRecipeData from '../src/data/dummyData/dummyRecipe'


const recipeData = smallRecipeData;

describe('Recipe', () => {

let recipe;

beforeEach(() => {
    recipe = new Recipe(recipeData);
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('Should be able to store all it\'s information', () => {
    /** todo: this it block should : this class should be able to store its properties / values 
     * this recipe has all properties that have a value from the data from ingrediants 
     */ 
    expect(recipe.id).to.equal(recipeData.id);
    expect(recipe.image).to.equal(recipeData.image);
    expect(recipe.ingredients).to.equal(recipeData.ingredients);
    expect(recipe.instructors).to.equal(recipeData.instructors);
    expect(recipe.name).to.equal(recipeData.name);
    expect(recipeData.tags).to.equal(recipeData.tags);
  });

  it('Should determine the names of ingredients needed', () => {
    /** Todo : 
     * 
     */
    const ingredients = recipe.getIngredientNames(smallIngredientsData)
    const answer = ["wheat flour", "blanched almond flour"];

    expect(ingredients).to.deep.equal(answer);
  });

});