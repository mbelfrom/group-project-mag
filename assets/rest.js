var requestUrl = 'https://api.documenu.com/v2/restaurants/search/geo';

var responseText = document.getElementById('response-text');

const params = {
    "lat": "40.68919",
    "distance": "1",
    "lon": "-73.992378",
    "page": "1"
}
let result = await Documenu.MenuItems.searchGeo(params)

Documenu.Restaurants.searchGeo(params)
.then(res=> {
    //window.$log.trace(res);
});