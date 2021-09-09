const edamam_url = "https://api.edamam.com/api/recipes/v2?";

// Check the url for a protein parameter
const urlParams = new URLSearchParams(window.location.search);
const protein = urlParams.get("protein");

// If there is none, redirect to the index.html
if (!protein) document.location.replace("./");

// Otherwise, fetch the recipes and display them on the page
// build a url search params object with all the correct values
const params = new URLSearchParams({
  type: "public",
  q: protein,
  app_id: "08159b42",
  app_key: "32e44ba6f69c2f616235a17676cd62e1",
  mealType: "Dinner",
  random: true,
});

// Fetch our data from our api endpoint
fetch(edamam_url + params)
  // Turn the response into a javascript
  .then((res) => res.json())
  // access the data
  .then(function (data) {
    // console.log(data.hits[0].recipe.url);
    // TODO: This is where we will build our recipe elements
    const recipeName = data.hits[0].recipe.label;
    const image = data.hits[0].recipe.image;
    const ingredients = data.hits[0].recipe.ingredientLines;
    const directions = data.hits[0].recipe.url;
    
    const recipeDiv = document.getElementById('recipe-result');

    const recipeElement = document.createElement('h1');
    recipeElement.innerText = `${recipeName}`;
    recipeDiv.append(recipeElement); 

    const imgElement = document.createElement('img');
    imgElement.setAttribute("src", `${image}`);
    imgElement.setAttribute('height','300');
    imgElement.setAttribute('width', '400');
    document.getElementById('recipe-img').append(imgElement);

    const ingredientLi = document.createElement('li');
    
    
    

    });
  
