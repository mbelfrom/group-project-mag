//When the user clicks the retrieve button a modal carousel is displayed
$("#launchModal").click(function () {
  $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

$("#close-btn").click(function () {
  $(".modal").removeClass("is-active");
});

//User Access to local storage
$("#saveRecipe").click(
  function() {
    var recipeArray = [];
    var recipes = JSON.parse(localStorage.getItem("recipes"));
    var recipe = JSON.parse(window.localStorage.getItem("recipe"));
    if (localStorage.getItem("recipes") === null) {
      recipeArray.push(recipe);
      window.localStorage["recipes"] = JSON.stringify(recipeArray);
    } else {
    recipeArray.push(recipes);
    recipeArray.push(recipe);
    window.localStorage["recipes"] = JSON.stringify(recipeArray.flat());
    }
})