var requestUrl = "https://api.documenu.com/v2/restaurants/search/geo?";
//   lat=40.688072&lon=-73.997385&distance=1&search=buffalo%20chicken";

// https://api.documenu.com/v2/menuitems/search/geo?
// https://api.documenu.com/v2/restaurants/search/geo?lat=40.688072&lon=-73.997385&distance=1&fullmenu&key=35e07563b7ad4eac86d6ccfd97946762

window.navigator.geolocation.getCurrentPosition(function (geoData) {
  const urlParams = new URLSearchParams(window.location.search);
  const protein = urlParams.get("protein");
  const params = new URLSearchParams({
    key: "35e07563b7ad4eac86d6ccfd97946762",
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
      const data = results.data;

      data.forEach(function (restaurant) {
        console.log(restaurant.restaurant_name);
        // TODO: Inside of this function `restaurant` is each of the items we get back from the API.
        // Use this object to build out your UI elements

        // Below is an example of the structure `restaurant` will have
        // const example = {
        //   restaurant_name: "Sonic Drive-In",
        //   restaurant_phone: "(480) 279-0189",
        //   restaurant_website:
        //     "https://locations.sonicdrivein.com/az/gilbert/4075-south-higley.html",
        //   hours: "",
        //   price_range: "",
        //   price_range_num: 0,
        //   restaurant_id: 33276530111719948,
        //   cuisines: ["American", "Burgers"],
        //   address: {
        //     city: "Gilbert",
        //     state: "AZ",
        //     postal_code: "85297",
        //     street: "4075 South Higley",
        //     formatted: "4075 South Higley Gilbert, AZ 85297",
        //   },
        //   geo: {
        //     lat: 33.27653,
        //     lon: -111.719947,
        //   },
        //   menus: [],
        //   last_updated: "2020-12-29T07:18:43.204Z",
        // };
      });

      const webDiv = document.getElementById("webDiv");
      const webElement = document.createElement("a");
      const link = document.createTextNode(
        "Check out your nearest restaurant!"
      );
      webElement.appendChild(link);
      webElement.title = "Restaurant URL";
      webElement.href = `${web}`;
      webDiv.append(webElement);

      const restname = document.getElementById("rest-name");
      const nameElement = document.createElement("h1");
      nameElement.innerText = `${name}`;
      restname.append(nameElement);
    });
});
