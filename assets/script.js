const get_chickenBtn = document.getElementById("chicken");
const recipe_container = document.getElementById("recipe-result");

const chicken_api =
  "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=08159b42&app_key=32e44ba6f69c2f616235a17676cd62e1&mealType=Dinner&random=true";

const api_key = "32e44ba6f69c2f616235a17676cd62e1";

get_chickenBtn.addEventListener("click", function redirect() {
  window.location.href = "results.html";
  () => {
      // fetching chicken recipe API
      fetch(chicken_api)
      .then(function (response) {
          // returning the API in an array
          return response.json();
        })
        .then(function (data) {
            console.log(data.hits[0].recipe.url);
            
            //   grabbing needed data from the returned array
            const recipe = completedRecipe({
                recipeName: data.hits[0].recipe.label,
                image: data.hits[0].recipe.image,
                ingredients: data.hits[0].recipe.ingredientLines,
                directionsURL: data.hits[0].recipe.url,
            });
        });
    };
});
