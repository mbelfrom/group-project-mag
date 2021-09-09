function renderRecipe(recipe) {
  // console.log(data.hits[0].recipe.url);
  // TODO: This is where we will build our recipe elements
  const recipeName = recipe.label;
  const image = recipe.image;
  const ingredients = recipe.ingredientLines;
  const directions = recipe.url;

  const recipeDiv = document.getElementById("recipe-result");

  const recipeElement = document.createElement("h1");
  recipeElement.innerText = `${recipeName}`;
  recipeDiv.append(recipeElement);

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", `${image}`);
  imgElement.setAttribute("height", "300");
  imgElement.setAttribute("width", "400");
  document.getElementById("recipe-img").append(imgElement);

  const ingredientDiv = document.getElementById("ingredients-li");
  const ingredientElement = document.createElement("p");
  ingredientElement.innerText = `${ingredients}`;
  ingredientDiv.append(ingredientElement);

  const directionsDiv = document.getElementById("directions-div");
  const directionsElement = document.createElement("a");
  const link = document.createTextNode("Click here for full directions.");
  directionsElement.appendChild(link);
  directionsElement.title = "Directions";
  directionsElement.href = `${directions}`;
  directionsDiv.append(directionsElement);
}
