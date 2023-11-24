// TODO: Display the list of recipes using the structure of table that is provided.
// TODO: Create at least one additional component that is used by this component.
// TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

import React from "react";
import DisplayRecipe from "./DisplayRecipe";

function RecipeList({ recipes, setRecipes }) {
  const recipeRows = recipes.map((r) => {
    return (
      <DisplayRecipe recipe={r} recipes={recipes} setRecipes={setRecipes} />
    );
  });

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{recipeRows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
