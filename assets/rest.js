var requestUrl = "https://api.documenu.com/v2/menuitems/search/geo?";
//   lat=40.688072&lon=-73.997385&distance=1&search=buffalo%20chicken";

// 

window.navigator.geolocation.getCurrentPosition(function (geoData) {
    console.log(geoData);
    
    
        fetch (requestUrl)
        .then (function(response){
            return response.json()
            
        })
        .then (function(data){
            console.log(data)
            
            const urlParams = new URLSearchParams(window.location.search);
            const protein = urlParams.get("protein");
            
            const lat = data.result.geo.lat
            const lon = data.result.geo.lon
            const name = data.result.restaurant_name
            const web = data.result.restaurant_website
            
            const params = new URLSearchParams({
              app_key: "35e07563b7ad4eac86d6ccfd97946762",
              lat: lat,
              lon: lon,
              distance: 1,
              search: protein,
            });
            
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
    });




