var requestUrl = "https://api.documenu.com/v2/restaurants/search/geo?";
//   lat=40.688072&lon=-73.997385&distance=1&search=buffalo%20chicken";

// https://api.documenu.com/v2/menuitems/search/geo?
// https://api.documenu.com/v2/restaurants/search/geo?lat=40.688072&lon=-73.997385&distance=1&fullmenu&key=35e07563b7ad4eac86d6ccfd97946762

window.navigator.geolocation.getCurrentPosition(function (geoData) {
  const urlParams = new URLSearchParams(window.location.search);
  const protein = urlParams.get("protein");
  const params = new URLSearchParams({
    key: "40e793cde7d7318555e7aba7e6fbe541",
    lat: geoData.coords.latitude,
    lon: geoData.coords.longitude,
    distance: 1,
    search: protein,
  });

  fetch(requestUrl + params)
    .then(function (response) {
      return response.json();
    })
    .then(function (results) {
      console.log(results.data[0]);
      // Use this object to build out your UI elements
      const restaurantName = results.data[0].restaurant_name;
      const restaurantPhone = results.data[0].restaurant_phone;
      const restaurantWebsite = results.data[0].restaurant_website;

      
      // append restaurant name
      const restDiv = document.getElementById("rest-name");
      const nameElement = document.createElement("h1");
      nameElement.innerText = `${restaurantName}`;
      restDiv.append(nameElement);
      
      // append restaurant number
      const numberDiv = document.getElementById("rest-number");
      const numberElement = document.createElement('p');
      numberElement.innerText = `${restaurantPhone}`;
      numberDiv.append(numberElement);
      
      // append restaurant url
      const webDiv = document.getElementById("webDiv");
      const webElement = document.createElement("a");
      const link = document.createTextNode(
        "Check out your nearest restaurant!"
      );
        webElement.appendChild(link);
        webElement.title = "Restaurant URL";
        webElement.href = `${restaurantWebsite}`;
        webDiv.append(webElement);
        });
    });



