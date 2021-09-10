var requestUrl = 'https://api.documenu.com/v2/restaurant/4072702673999819?key=f1f6dd6fce22010400139ef214b7da62';

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

        const restname = document.getElementById('rest-name');
        const nameElement = document.createElement('h1');
        nameElement.innerText = `${name}`;
        restname.append(nameElement);
        
        const restDiv = document.getElementById("rest-div");
        const restElement = document.createElement('a');
        const link = document.createTextNode('Check out your nearest restaurant!');
        restElement.appendChild(link);
        restDiv.append(restElement);
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