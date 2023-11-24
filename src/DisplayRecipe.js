import React from "react";

function DisplayRecipe({ recipe, recipes, setRecipes }) {
  const handleDelete = () => {
    const newRecipeList = recipes.filter((r) => r !== recipe);
    setRecipes([...newRecipeList]);
  };

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} />
      </td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default DisplayRecipe;
