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
    console.log(data);
    // TODO: This is where we will build our recipe elements
  });


  var requestUrl = 'https://api.documenu.com/v2/restaurants/search/geo';

var responseText = document.getElementById('response-text');
