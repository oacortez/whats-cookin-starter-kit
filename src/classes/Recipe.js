class Recipe {
  constructor(recipeInfo) {
    this.id = recipeInfo.id;
    this.image = recipeInfo.image;
    this.ingredients = recipeInfo.ingredients;
    this.instructors = recipeInfo.instructors;
    this.name = recipeInfo.name;
    this.tags = recipeInfo.tags;
    this.ingredientsCost = 0;
  }

  getIngredientNames(ingredientsData) {
    let ingredientName = []
      this.ingredients.map((item) => {
      ingredientsData.forEach((ingredient) => {
        if(item.id === ingredient.id) {
          ingredientName.push(ingredient.name);
        }
      });
    });
    return ingredientName;
  }

  ingredientCost() {
  }
}

export default Recipe;