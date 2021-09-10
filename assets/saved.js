$("#saveRecipe").click(function () {
  var recipeArray = [];
  var recipes = JSON.parse(localStorage.getItem("recipes"));
  var recipe = JSON.parse(window.localStorage.getItem("recipe"));
  if (localStorage.getItem("recipes") === null) {
    recipeArray.push(recipe);
    window.localStorage.setItem("recipes", JSON.stringify(recipeArray));
  } else {
    window.localStorage.setItem(
      "recipes",
      JSON.stringify(recipes.concat(recipe))
    );
  }
});

$("#populate").click(function () {
  var recipes = JSON.parse(localStorage.getItem("recipes"));
  recipes.forEach(function (recipe, index) {
    var element = `
          <div class="column is-one-quarter">
            <a href="#" onclick="populateModal(${index})"> <img src=${recipe.image} alt="${recipe.label}"></a></br>
            <h3>${recipe.label}</h3>
          </div>
        `;
    $("#meals").append(element);
  });
  $("#populate")
    .prop("value", "Back")
    .click(function () {
      window.localStorage.removeItem("recipe");
      window.location.href = "index.html";
    });
  $("#populate").html("Back");
});
function populateModal(index) {
  var recipes = JSON.parse(localStorage.getItem("recipes"));
  var saveRecipe = recipes[index];
  console.log("saveRecipe", saveRecipe);
  var ingredientsList = saveRecipe.ingredients.forEach(function (ingredient) {
    var element = `
        <li>${ingredient.text}</li>
      `;
    $("#modal-ingredients").append(element);
  });
  $("#modal-title").text(saveRecipe.label);
  $("#modal-image").attr("src", saveRecipe.image);
  $("#view-recipe").attr("href", saveRecipe.url).attr("target", "_blank");
  $(".modal").addClass("is-active");
}

function modalClose() {
  $(".modal").removeClass("is-active");
}
function populateMeals() {
  var recipes = JSON.parse(localStorage.getItem("recipes"));
recipes.forEach(function(recipe, index) {
  var element = `
      <div class="column is-one-quarter">
          <button class="delete" onclick="removeRecipe(${index})"></button></br>
        <a href="#" onclick="populateModal(${index})"> <img src=${recipe.image} alt="${recipe.label}"></a></br>
        <h3>${recipe.label}</h3>
      </div>
  `
  $('#meals').append(element)
})
$('#populate').prop('value', 'Back').click(function() {
  window.localStorage.removeItem("recipe")
  window.location.href = 'index.html'
})
$('#populate').html('Back')
}

function removeRecipe(index) {
var recipes = JSON.parse(localStorage.getItem("recipes"));
recipes.splice(index, 1);
window.localStorage.setItem("recipes", JSON.stringify(recipes));
$('.column').remove();
populateMeals();
console.log()
}
