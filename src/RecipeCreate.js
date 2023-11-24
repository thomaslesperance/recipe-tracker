// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO: Add the required input and textarea form elements.
// TODO: Add the required submit and change handlers

import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData(initialFormData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="tenPercent ingredients preparation last">
            <td>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="Image Photo"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                placeholder="Preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button id="submit" name="submit" type="submit">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
