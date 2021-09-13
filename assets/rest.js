var requestUrl = "https://api.documenu.com/v2/restaurants/search/geo?";

window.navigator.geolocation.getCurrentPosition(function (geoData) {
  const urlParams = new URLSearchParams(window.location.search);
  const protein = urlParams.get("protein");
  const params = new URLSearchParams({
    key: "82aaa0be926d02d8e087619e4ce94f04",
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



