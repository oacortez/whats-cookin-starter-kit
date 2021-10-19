import { expect } from 'chai';
import Recipe from '../src/classes/Recipe.js';
import ingredientsData from '../src/data/ingredients';


describe('Recipe', () => {

let recipe;
let recipeData;

beforeEach(() => {
  recipeData = {
    "id": 541288,
  "image": "https://spoonacular.com/recipeImages/541288-556x370.jpg",
  "ingredients": [
    {
      "id": 20081,
      "quantity": {
        "amount": 160,
        "unit": "g"
      }
    },
    {
      "id": 93740,
      "quantity": {
        "amount": 40,
        "unit": "g"
      }
    }
  ],
  "instructions": [
    {
      "instruction": "Cut the butter into small cubes and keep them refrigerated until ready to use (I cut on parchment paper and wrap up the butter for easy transfer.).In the food processor, combine the flour, almond meal, sugar, and salt. If you don’t have a food processor, you can simply use a bowl to mix all the ingredients.If you want your sesame seeds to be fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.Take out the butter from the refrigerator and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.Lastly add egg yolk.If the food processor is small (like mine) and it doesn’t look like it’s mixed completely, take it out and mix well with a silicone spatula.Form the dough into a ball and cut in half.",
      "number": 1
    },
    {
      "instruction": "Roll it to a log approximately 2” across. For me it’s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. Form a nice shape. I wasn't paying attention so my log is flat on one side (see step 11)!Wrap the logs tightly in plastic wrap and refrigerate until firm, about 1 hour.Preheat the oven to 350° F (175° C).",
      "number": 2
    }
  ],
  "name": "Sesame Cookies",
  "tags": [
    "antipasti",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre"
    ]
  }
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

  it.only('Should determine the names of ingredients needed', () => {
    /** Todo : 
     * 
     */
    console.log(ingredientsData);
    const ingredients = recipe.getIngredientNames(ingredientsData)
    const answer = ["wheat flour", "blanched almond flour"];

    expect(ingredients).to.deep.equal(answer);
  });

});