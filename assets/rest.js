var requestUrl = 'https://api.documenu.com/v2/restaurant/4072702673999819?key=40e793cde7d7318555e7aba7e6fbe541';

function getData (){
    fetch (requestUrl)
    .then (function(response){
        return response.json()

    })
    .then (function(data){
        console.log(data)
        const lat = data.result.geo.lat
        const lon = data.result.geo.lon
        const name = data.result.restaurant_name
        const web = data.result.restaurant_website


        const webDiv = document.getElementById("webDiv");
        const webElement = document.createElement("a");
        const link = document.createTextNode('Check out your nearest restaurant!');
        webElement.appendChild(link);
        webElement.title = "Restaurant URL";
        webElement.href = (`${web}`);
        webDiv.append(webElement);

        const restname = document.getElementById('rest-name');
        const nameElement = document.createElement('h1');
        nameElement.innerText = `${name}`;
        restname.append(nameElement);

    })
}
getData ()
// var responseText = document.getElementById('response-text');

// const params = {
//     "lat": "40.68919",
//     "distance": "1",
//     "lon": "-73.992378",
//     "page": "1"
// }
// let result = await Documenu.MenuItems.searchGeo(params)

// Documenu.Restaurants.searchGeo(params)
// .then(res=> {
//     //window.$log.trace(res);
// });